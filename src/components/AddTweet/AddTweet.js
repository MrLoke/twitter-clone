import { useState } from 'react'
import { db, storage } from 'firebase-config'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from 'redux/actions/modalActions'
import firebase from 'firebase/app'
import { FiImage } from 'react-icons/fi'
import { GrEmoji } from 'react-icons/gr'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import ReactTooltip from 'react-tooltip'
import {
  Container,
  Form,
  FormContainer,
  Textarea,
  TweetMultimedia,
  UserAvatar,
  ActionTweet,
  FileInput,
  CustomFileUpload,
  TweetBtn,
} from './AddTweetStyled'

const AddTweet = ({ secondaryStyles }) => {
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const user = useSelector((state) => state.auth.userInfo)
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
        })

      setText('')
      setFile(null)
    }

    if (text.length > 0 && file === null) {
      db.collection('feed').doc().set({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: text,
        user: user,
        likesCount: 0,
        commentsCount: 0,
      })

      setText('')
    } else return

    if (modalIsOpen) dispatch(hideModal())
  }

  return (
    <Container secondaryStyles={secondaryStyles}>
      <Form onSubmit={sendTweet}>
        <FormContainer>
          <UserAvatar src={user.photoURL} alt={`${user.displayName} avatar`} />
          <Textarea
            cols='20'
            rows='5'
            required={true}
            maxLength={250}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={`What's happening?`}></Textarea>
        </FormContainer>
        <TweetMultimedia>
          <div>
            <ActionTweet data-tip='Upload image'>
              <CustomFileUpload
                htmlFor='file-upload'
                className='custom-file-upload'>
                <FiImage size='2.5rem' color='rgb(29, 161, 242)' />
              </CustomFileUpload>
              <FileInput id='file-upload' type='file' onChange={onFileChange} />
            </ActionTweet>
            <ActionTweet data-tip='Gif'>
              <AiOutlineFileGif size='2.5rem' color='rgb(29, 161, 242)' />
            </ActionTweet>
            <ActionTweet data-tip='Create poll'>
              <BiPoll size='2.5rem' color='rgb(29, 161, 242)' />
            </ActionTweet>
            <ActionTweet data-tip='Emoji'>
              <GrEmoji size='2.5rem' color='rgb(29, 161, 242)' />
            </ActionTweet>
          </div>
          <TweetBtn type='submit' text={text}>
            Tweet
          </TweetBtn>
        </TweetMultimedia>
      </Form>
      <ReactTooltip
        place='bottom'
        type='dark'
        effect='solid'
        backgroundColor='rgba(101, 119, 134)'
      />
      <ReactTooltip
        place='bottom'
        type='dark'
        effect='solid'
        backgroundColor='rgba(101, 119, 134)'
      />
      <ReactTooltip
        place='bottom'
        type='dark'
        effect='solid'
        backgroundColor='rgba(101, 119, 134)'
      />
      <ReactTooltip
        place='bottom'
        type='dark'
        effect='solid'
        backgroundColor='rgba(101, 119, 134)'
      />
    </Container>
  )
}

export default AddTweet
