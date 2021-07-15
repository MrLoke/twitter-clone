import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from 'firebase-config'
import { onFollow, onUnfollow } from 'redux/actions/appActions'
import {
  Container,
  UserContainer,
  UserInitials,
  UserAvatar,
  DisplayName,
  UserName,
  FollowBtn,
  UnfollowBtn,
} from './RecommendedUserStyled'

const RecommendedUser = ({ user }) => {
  const [follows, setFollows] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .doc(user.userId)
      .collection('followers')
      .doc(user.userId)
      .onSnapshot((snapshot) => setFollows(snapshot.data()))

    return () => unsubscribe()
  }, [user.userId])

  return (
    <Container>
      <UserContainer>
        <UserAvatar src={user.photoURL} alt='' />
        <UserInitials>
          <DisplayName>{user.displayName}</DisplayName>
          <UserName>@{user.userName}</UserName>
        </UserInitials>
      </UserContainer>
      {follows?.followed ? (
        <UnfollowBtn
          onClick={() => dispatch(onUnfollow(user.userId, user.userId))}>
          Unfollow
        </UnfollowBtn>
      ) : (
        <FollowBtn onClick={() => dispatch(onFollow(user.userId, user.userId))}>
          Follow
        </FollowBtn>
      )}
    </Container>
  )
}

export default RecommendedUser
