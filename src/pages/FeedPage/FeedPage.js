import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import NavBar from 'components/NavBar/NavBar'
import AddTweet from 'components/AddTweet/AddTweet'
import Tweet from 'components/Tweet/Tweet'
import { likeTweet, dislikeTweet } from 'redux/actions/appActions'
import { db } from 'firebase-config'
import { MainFeed } from './FeedPageStyled'

const FeedPage = () => {
  const [followingUsersFeed, setFollowingUsersFeed] = useState([])
  const user = useSelector((state) => state.auth.userInfo)
  const feed = useSelector((state) => state.app.feed)

  const fetchUsersFeed = useCallback(() => {
    const unsubscribe = db
      .collection('following')
      .doc(user.userId)
      .collection('userFollowing')
      .onSnapshot((snapshot) => {
        if (snapshot.size < 0) return
        // filter the current login user tweets and spread it with other following users tweets
        const currUserFeed = feed.filter(
          (post) => post.user.userId === user.userId
        )
        setFollowingUsersFeed(
          [
            ...currUserFeed,
            ...snapshot.docs.map((doc) =>
              feed.filter((post) => post.user.userId === doc.id)
            ),
          ].flat()
        )
      })

    return () => unsubscribe()
  }, [feed, user.userId])

  useEffect(() => {
    fetchUsersFeed()
  }, [fetchUsersFeed])

  return (
    <MainFeed>
      <NavBar text='Home' />
      <AddTweet />
      {followingUsersFeed.length > 0 ? (
        followingUsersFeed.map((tweet) => (
          <Tweet
            key={tweet.id}
            onPressLike={likeTweet}
            onPressDislike={dislikeTweet}
            tweet={tweet}
          />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </MainFeed>
  )
}

export default FeedPage
