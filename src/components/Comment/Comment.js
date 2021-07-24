import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { likeComment, dislikeComment } from 'redux/actions/appActions'
import { db } from 'firebase-config'
import { AiOutlineRetweet } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { FcLike } from 'react-icons/fc'
import { CgMoreAlt } from 'react-icons/cg'
import ReactTooltip from 'react-tooltip'
import {
  Container,
  TweetFeed,
  UserAvatar,
  UserInitials,
  UserNames,
  ShowMoreTweet,
  DisplayName,
  UserName,
  TweetMessage,
  TweetActions,
  TweetActionBtn,
  ImageTweet,
} from './CommentStyled'

const Comment = ({ comment }) => {
  const [likes, setLikes] = useState()
  const user = useSelector((state) => state.auth.userInfo)
  const dispatch = useDispatch()
  const { tweetId } = useParams()

  useEffect(() => {
    const unsubscribe = db
      .collection('feed')
      .doc(tweetId)
      .collection('comments')
      .doc(comment[0].id)
      .collection('likes')
      .doc(user.userId)
      .onSnapshot((snapshot) => setLikes(snapshot.data()))

    return () => unsubscribe()
  }, [tweetId, comment, user.userId])

  return (
    <Container>
      <Link to={`/profile/${comment[0].user.userName}`}>
        <UserAvatar
          src={comment[0].user.photoURL}
          alt={`${comment[0].user.displayName} avatar`}
        />
      </Link>
      <TweetFeed>
        <UserInitials>
          <Link to={`/profile/${comment[0].user.userName}`}>
            <UserNames>
              <DisplayName>{comment[0].user.displayName}</DisplayName>
              &nbsp;&nbsp;
              <UserName>@{comment[0].user.userName}</UserName>
            </UserNames>
          </Link>
          <ShowMoreTweet data-tip='More'>
            <CgMoreAlt size='2.5rem' />
          </ShowMoreTweet>
        </UserInitials>

        <TweetMessage>{comment[0].message}</TweetMessage>
        {comment[0].images ? (
          <ImageTweet
            src={comment[0].images[0].url}
            alt={`${comment[0].images[0].name}`}
          />
        ) : null}

        <TweetActions>
          <TweetActionBtn data-tip='Retweet'>
            <AiOutlineRetweet size='2rem' />
          </TweetActionBtn>

          {likes?.liked ? (
            <TweetActionBtn
              isLike
              onClick={() =>
                dispatch(dislikeComment(tweetId, comment[0].id, user.userId))
              }>
              <FcLike size='2rem' />
              {comment[0].likesCount}
            </TweetActionBtn>
          ) : (
            <TweetActionBtn
              isLike
              onClick={() =>
                dispatch(likeComment(tweetId, comment[0].id, user.userId))
              }>
              <AiOutlineHeart size='2rem' />
              {comment[0].likesCount}
            </TweetActionBtn>
          )}

          <TweetActionBtn data-tip='Share'>
            <FiShare size='2rem' />
          </TweetActionBtn>
        </TweetActions>
      </TweetFeed>

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

export default Comment
