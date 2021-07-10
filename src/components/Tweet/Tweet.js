import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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
  ShowMoreTweet,
  DisplayName,
  UserName,
  TweetMessage,
  TweetActions,
  TweetActionBtn,
  ImageTweet,
} from './TweetStyled'

const Tweet = ({ tweet, onLikePress, onDislikePress }) => {
  const [likes, setLikes] = useState()
  const user = useSelector((state) => state.user.userInfo)

  useEffect(() => {
    db.collection('feed')
      .doc(tweet.id)
      .collection('likes')
      .doc(user.userId)
      .onSnapshot((snapshot) => setLikes(snapshot.data()))
  }, [])

  return (
    <Container>
      <UserAvatar
        src={tweet.user.photoURL}
        alt={`${user.displayName} avatar`}
      />
      {console.log(likes)}
      <TweetFeed>
        <UserInitials>
          <div style={{ display: 'flex' }}>
            <DisplayName>{tweet.user.displayName}</DisplayName>
            &nbsp;&nbsp;
            <UserName>@{tweet.user.userName}</UserName>
          </div>
          <ShowMoreTweet data-tip='More'>
            <CgMoreAlt size='2.5rem' />
          </ShowMoreTweet>
        </UserInitials>

        <TweetMessage>{tweet.message}</TweetMessage>

        {tweet.images ? <ImageTweet src={tweet.images[0].url} alt='' /> : null}

        <TweetActions>
          <TweetActionBtn data-tip='Reply'>
            <FaRegComment size='2rem' />
          </TweetActionBtn>

          <TweetActionBtn data-tip='Retweet'>
            <AiOutlineRetweet size='2rem' />
          </TweetActionBtn>

          {likes?.liked ? (
            <TweetActionBtn isLike onClick={() => onDislikePress(tweet.id)}>
              <FcLike size='2rem' />
              {tweet.likesCount}
            </TweetActionBtn>
          ) : (
            <TweetActionBtn isLike onClick={() => onLikePress(tweet.id)}>
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
