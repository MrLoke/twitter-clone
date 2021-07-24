import { useState } from 'react'
import { useSelector } from 'react-redux'
import { db, storage } from 'firebase-config'
import { useParams } from 'react-router-dom'
import firebase from 'firebase/app'
import { FiImage } from 'react-icons/fi'
import { GrEmoji } from 'react-icons/gr'
import { AiOutlineFileGif } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'
import {
  Container,
  Form,
  Avatar,
  Textarea,
  FormContainer,
  TweetMultimedia,
  ActionTweet,
  FileInput,
  CustomFileUpload,
  TweetBtn,
} from './TweetReplyStyled'

const TweetReply = () => {
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const { tweetId } = useParams()
  const user = useSelector((state) => state.auth.userInfo)

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const reply = async (e) => {
    e.preventDefault()

    const userPosts = db.collection('feed').doc(tweetId)

    if (file !== null) {
      const storageRef = storage.ref()
      const fileRef = storageRef.child(file.name)
      await fileRef.put(file)

      userPosts
        .collection('comments')
        .add({
          message: text,
          user: user,
          likesCount: 0,
          images: firebase.firestore.FieldValue.arrayUnion({
            name: file.name,
            url: await fileRef.getDownloadURL(),
          }),
        })
        .then(() => {
          userPosts.update({
            commentsCount: firebase.firestore.FieldValue.increment(1),
          })
        })

      setText('')
      setFile(null)
    }

    userPosts
      .collection('comments')
      .add({
        message: text,
        user: user,
        likesCount: 0,
      })
      .then(() => {
        userPosts.update({
          commentsCount: firebase.firestore.FieldValue.increment(1),
        })
      })

    setText('')
  }

  return (
    <Container>
      <Form onSubmit={reply}>
        <FormContainer>
          <Avatar src={user.photoURL} />
          <Textarea
            cols='20'
            rows='2'
            required={true}
            maxLength={250}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Tweet your reply'></Textarea>
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
            <ActionTweet data-tip='Emoji'>
              <GrEmoji size='2.5rem' color='rgb(29, 161, 242)' />
            </ActionTweet>
          </div>
          <TweetBtn type='submit' text={text}>
            Reply
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
    </Container>
  )
}

export default TweetReply
