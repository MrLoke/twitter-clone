import { useState, useEffect } from 'react'
import Tweet from 'components/Tweet/Tweet'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { db } from 'firebase-config'

const TweetComments = () => {
  const [comments, setComments] = useState([])
  const { tweetId } = useParams()
  const user = useSelector((state) => state.auth.userInfo)

  useEffect(() => {
    const unsubscribe = db
      .collection('feed')
      .doc(tweetId)
      .collection('comments')
      .doc(user.userId)
      .onSnapshot((snapshot) => setComments([snapshot.data()]))

    return () => unsubscribe()
  }, [tweetId, user.userId])

  return (
    <div>
      {comments?.length > 0 ? (
        comments.map((comment) => <Tweet key={comment.id} tweet={comment} />)
      ) : (
        <LoadingSpinner />
      )}
    </div>
  )
}

export default TweetComments
