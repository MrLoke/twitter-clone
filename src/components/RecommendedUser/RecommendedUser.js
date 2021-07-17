import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from 'firebase-config'
import { onFollow, onUnfollow } from 'redux/actions/appActions'
import { useHistory } from 'react-router-dom'
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
  const currentUser = useSelector((state) => state.auth.userInfo)
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = db
      .collection('following')
      .doc(currentUser.userId)
      .collection('userFollowing')
      .doc(user.userId)
      .onSnapshot((snapshot) => setFollows(snapshot.data()))

    return () => unsubscribe()
  }, [user.userId, currentUser.userId])

  const redirectToUserProfile = () => {
    history.push(`/profile/${user.userName}`)
  }

  return (
    <Container>
      <UserContainer>
        <UserAvatar
          src={user.photoURL}
          alt=''
          onClick={redirectToUserProfile}
        />
        <UserInitials onClick={redirectToUserProfile}>
          <DisplayName>{user.displayName}</DisplayName>
          <UserName>@{user.userName}</UserName>
        </UserInitials>
      </UserContainer>
      {follows?.followed ? (
        <UnfollowBtn onClick={() => dispatch(onUnfollow(user.userId))}>
          Unfollow
        </UnfollowBtn>
      ) : (
        <FollowBtn onClick={() => dispatch(onFollow(user.userId))}>
          Follow
        </FollowBtn>
      )}
    </Container>
  )
}

export default RecommendedUser
