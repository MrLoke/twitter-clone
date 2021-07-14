import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal, showModal } from 'redux/actions/modalActions'
import Sidebar from 'components/Sidebar/Sidebar'
import AddTweet from 'components/AddTweet/AddTweet'
import Tweet from 'components/Tweet/Tweet'
import FollowsRecommends from 'components/FollowsRecommends/FollowsRecommends'
import MobileNav from 'components/MobileNav/MobileNav'
import Modal from 'components/Modal/Modal'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { db, storage } from 'firebase-config'
import firebase from 'firebase/app'
import { Container, MainFeed, AddTweetMobileBtn } from './FeedPageStyled'

const FeedPage = () => {
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const user = useSelector((state) => state.auth.userInfo)
  const feed = useSelector((state) => state.app.feed)
  const modalIsOpen = useSelector((state) => state.modal.modalIsOpen)
  const dispatch = useDispatch()

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
          commentsCount: 0,
          comments: firebase.firestore.FieldValue.arrayUnion({
            user: '',
            comment: '',
          }),
        })
      setText('')
    } else return

    if (modalIsOpen) dispatch(hideModal())
  }

  return (
    <Container>
      <Sidebar />
      <MainFeed>
        <AddTweet
          text={text}
          setText={setText}
          sendTweet={sendTweet}
          onFileChange={onFileChange}
        />
        {feed.length > 0 ? (
          feed.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
        ) : (
          <LoadingSpinner />
        )}
        <AddTweetMobileBtn onClick={() => dispatch(showModal())}>
          <svg viewBox='0 0 24 24' fill='#fff' width='3rem' height='3rem'>
            <g>
              <path d='M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z'></path>
            </g>
          </svg>
        </AddTweetMobileBtn>
      </MainFeed>
      <FollowsRecommends />
      <MobileNav />
      <Modal>
        <AddTweet
          secondaryStyles
          text={text}
          setText={setText}
          sendTweet={sendTweet}
          onFileChange={onFileChange}
        />
      </Modal>
    </Container>
  )
}

export default FeedPage
