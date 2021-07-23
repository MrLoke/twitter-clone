import { useState, useEffect } from 'react'
import NavBar from 'components/NavBar/NavBar'
import Tweet from 'components/Tweet/Tweet'
import TweetReply from 'components/TweetReply/TweetReply'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { db } from 'firebase-config'
import { Container } from './TweetSectionPageStyled'

const TweetSectionPage = () => {
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const { tweetId } = useParams()
  const user = useSelector((state) => state.auth.userInfo)
  const feed = useSelector((state) => state.app.feed)

  useEffect(() => {
    const unsubscribe = db
      .collection('feed')
      .doc(tweetId)
      .collection('comments')
      .onSnapshot((snapshot) => {
        if (snapshot.size < 0) return
        setComments(snapshot.docs.map((doc) => doc.data()))
      })

    if (feed.length > 0) {
      // waiting for fetch feed if refresh on this page
      const userPost = feed?.find((post) => post.id === tweetId)
      setPost([userPost])
    }

    return () => unsubscribe()
  }, [user.userId, tweetId, feed])

  return (
    <Container>
      <NavBar text='Tweet' backIcon />
      {post?.length > 0 ? (
        post.map((tweet) => <Tweet key={tweet.id} tweet={tweet} biggerFont />)
      ) : (
        <LoadingSpinner />
      )}
      <TweetReply />
      {comments.length !== 0 ? (
        comments.length > 0 ? (
          comments.map((comment) => <Tweet key={comment.id} tweet={comment} />)
        ) : (
          <LoadingSpinner />
        )
      ) : null}
    </Container>
  )
}

export default TweetSectionPage
