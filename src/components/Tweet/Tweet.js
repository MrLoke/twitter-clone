import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onLikePress, onDislikePress } from 'redux/actions/appActions'
import { Link, useHistory } from 'react-router-dom'
import { db } from 'firebase-config'
import { FaRegComment } from 'react-icons/fa'
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
} from './TweetStyled'

const Tweet = ({ tweet, biggerFont }) => {
  const [likes, setLikes] = useState()
  const user = useSelector((state) => state.auth.userInfo)
  const dispatch = useDispatch()
  const history = useHistory()

  const redirectToUserProfile = () => {
    history.push(`/profile/${tweet.user.userName}`)
  }

  const redirectToTweet = () => {
    history.push(`/${tweet.user.userName}/status/${tweet.id}`)
  }

  useEffect(() => {
    const unsubscribe = db
      .collection('feed')
      .doc(tweet?.id)
      .collection('likes')
      .doc(user.userId)
      .onSnapshot((snapshot) => setLikes(snapshot.data()))

    return () => unsubscribe()
  }, [tweet.id, user.userId])

  return (
    <Container>
      <Link to={`/profile/${tweet.user.userName}`}>
        <UserAvatar
          src={tweet.user.photoURL}
          alt={`${tweet.user.displayName} avatar`}
          onClick={redirectToUserProfile}
        />
      </Link>
      <TweetFeed>
        <UserInitials>
          <Link to={`/profile/${tweet.user.userName}`}>
            <UserNames onClick={redirectToUserProfile}>
              <DisplayName>{tweet.user.displayName}</DisplayName>
              &nbsp;&nbsp;
              <UserName>@{tweet.user.userName}</UserName>
            </UserNames>
          </Link>
          <ShowMoreTweet data-tip='More'>
            <CgMoreAlt size='2.5rem' />
          </ShowMoreTweet>
        </UserInitials>

        <TweetMessage onClick={redirectToTweet} biggerFont={biggerFont}>
          {tweet.message}
        </TweetMessage>
        {tweet.images ? (
          <ImageTweet
            onClick={redirectToTweet}
            src={tweet.images[0].url}
            alt={`${tweet.images[0].name}`}
          />
        ) : null}

        <TweetActions>
          <TweetActionBtn data-tip='Reply'>
            <FaRegComment size='2rem' />
          </TweetActionBtn>

          <TweetActionBtn data-tip='Retweet'>
            <AiOutlineRetweet size='2rem' />
          </TweetActionBtn>

          {likes?.liked ? (
            <TweetActionBtn
              isLike
              onClick={() => dispatch(onDislikePress(tweet.id, user.userId))}>
              <FcLike size='2rem' />
              {tweet.likesCount}
            </TweetActionBtn>
          ) : (
            <TweetActionBtn
              isLike
              onClick={() => dispatch(onLikePress(tweet.id, user.userId))}>
              <AiOutlineHeart size='2rem' />
              {tweet.likesCount}
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

export default Tweet
