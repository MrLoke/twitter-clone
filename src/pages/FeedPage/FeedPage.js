import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signOut } from 'redux/actions/authActions'
import { applyTheme } from 'redux/actions/themeActions'
import { darkTheme, lightTheme } from 'theme/theme'
import Sidebar from 'components/Sidebar/Sidebar'
import AddTweet from 'components/AddTweet/AddTweet'
import Tweet from 'components/Tweet/Tweet'
import FollowsRecommends from 'components/FollowsRecommends/FollowsRecommends'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { Container, MainFeed } from './FeedPageStyled'
import { db, storage } from 'firebase-config'
import firebase from 'firebase/app'

const FeedPage = () => {
  const [text, setText] = useState('')
  const [tweets, setTweets] = useState([])
  const [file, setFile] = useState(null)
  const user = useSelector((state) => state.user.userInfo)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    db.collection('feed').onSnapshot((snapshot) =>
      setTweets(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    )
  }, [])

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const sendTweet = async (e) => {
    e.preventDefault()

    if (file !== null) {
      const storageRef = storage.ref()
      const fileRef = storageRef.child(file.name)
      await fileRef.put(file)

      db.collection('feed')
        .doc()
        .set({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: text,
          user: user,
          likesCount: 0,
          commentsCount: 0,
          images: firebase.firestore.FieldValue.arrayUnion({
            name: file.name,
            url: await fileRef.getDownloadURL(),
          }),
          comments: firebase.firestore.FieldValue.arrayUnion({
            user: '',
            comment: '',
          }),
        })
      setText('')
      setFile(null)
    }

    if (text.length > 0 && file === null) {
      db.collection('feed')
        .doc()
        .set({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: text,
          user: user,
          likesCount: 0,
          comments: 0,
          comments: firebase.firestore.FieldValue.arrayUnion({
            user: '',
            comment: '',
          }),
        })
      setText('')
    } else return
  }

  const onLikePress = (docId) => {
    const userPosts = db.collection('feed').doc(docId)

    userPosts
      .collection('likes')
      .doc(user.userId)
      .set({
        liked: true,
      })
      .then(() => {
        userPosts.update({
          likesCount: firebase.firestore.FieldValue.increment(1),
        })
      })
  }

  const onDislikePress = (docId) => {
    const userPosts = db.collection('feed').doc(docId)

    userPosts
      .collection('likes')
      .doc(user.userId)
      .delete()
      .then(() => {
        userPosts.update({
          likesCount: firebase.firestore.FieldValue.increment(-1),
        })
      })
  }

  const changeTheme = (theme) => {
    dispatch(applyTheme(theme))
  }

  return (
    <Container>
      <Sidebar />
      <MainFeed>
        {console.log(tweets)}
        <AddTweet
          text={text}
          setText={setText}
          sendTweet={sendTweet}
          onFileChange={onFileChange}
        />
        {tweets.length > 0 ? (
          tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              onLikePress={onLikePress}
              onDislikePress={onDislikePress}
            />
          ))
        ) : (
          <LoadingSpinner />
        )}
        <div>
          <button
            onClick={() => {
              dispatch(signOut())
              history.push('/login')
            }}>
            Logout
          </button>
          <button onClick={() => changeTheme(darkTheme)}>Dark</button>
          <button onClick={() => changeTheme(lightTheme)}>Light</button>
        </div>
      </MainFeed>
      <FollowsRecommends />
    </Container>
  )
}

export default FeedPage
