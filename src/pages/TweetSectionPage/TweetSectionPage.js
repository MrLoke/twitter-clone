import { useState, useEffect } from 'react'
import Tweet from 'components/Tweet/Tweet'
import TweetReply from 'components/TweetReply/TweetReply'
import TweetComments from 'components/TweetComments/TweetComments'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from './TweetSectionPageStyled'

const TweetSectionPage = () => {
  const [post, setPost] = useState([])
  const { tweetId } = useParams()
  const feed = useSelector((state) => state.app.feed)

  useEffect(() => {
    if (feed.length > 0) {
      // waiting for fetch feed if refresh on this page
      const userPost = feed?.find((post) => post.id === tweetId)
      setPost([userPost])
    }
  }, [tweetId, feed])

  return (
    <Container>
      {post?.length > 0 ? (
        post.map((tweet) => <Tweet key={tweet.id} tweet={tweet} biggerFont />)
      ) : (
        <LoadingSpinner />
      )}
      <TweetReply />
      <TweetComments />
    </Container>
  )
}

export default TweetSectionPage
