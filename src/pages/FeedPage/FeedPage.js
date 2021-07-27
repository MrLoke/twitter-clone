import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const unsubscribe = db
      .collection('following')
      .doc(user.userId)
      .collection('userFollowing')
      .onSnapshot((snapshot) => {
        if (snapshot.size < 0) return
        const currUserFeed = feed.filter(
          (post) => post.user.userId === user.userId
        )
        setFollowingUsersFeed([
          ...currUserFeed,
          ...snapshot.docs.map((doc) =>
            feed.filter((post) => post.user.userId === doc.id)
          ),
        ])
      })

    return () => unsubscribe()
  }, [feed, user.userId])

  return (
    <MainFeed>
      <NavBar text='Home' />
      <AddTweet />
      {feed.length > 0 ? (
        followingUsersFeed
          .flat()
          .sort((a, b) => a.timestamp.nanoseconds - b.timestamp.nanoseconds)
          .map((tweet) => (
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
