import { useSelector } from 'react-redux'
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

const AddTweet = ({ text, setText, sendTweet, onFileChange }) => {
  const user = useSelector((state) => state.user.userInfo)

  return (
    <Container>
      <Form onSubmit={sendTweet}>
        <FormContainer>
          <UserAvatar src={user.photoURL} alt={`${user.displayName} avatar`} />
          <Textarea
            cols='20'
            rows='5'
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
