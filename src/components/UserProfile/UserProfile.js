import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { onFollow, onUnfollow } from 'redux/actions/appActions'
import { db } from 'firebase-config'
import { BiEnvelope } from 'react-icons/bi'
import { IoIosMore } from 'react-icons/io'
import { MdNotificationsActive } from 'react-icons/md'
import {
  Container,
  HeaderPhoto,
  UserAvatar,
  UserInitials,
  DisplayName,
  UserName,
  FollowsContainer,
  FollowsInfo,
  UserActions,
  UserActionsBtn,
  FollowBtn,
  UnfollowBtn,
  EditProfileBtn,
} from './UserProfileStyled'

const UserProfile = ({ currentUserProfile }) => {
  const [follows, setFollows] = useState()
  const { name } = useParams()
  const user = useSelector((state) => state.auth.userInfo)
  const users = useSelector((state) => state.app.users)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = db
      .collection('following')
      .doc(user.userId)
      .collection('userFollowing')
      .doc(currentUserProfile?.userId)
      .onSnapshot((snapshot) => setFollows(snapshot.data()))

    return () => unsubscribe()
  }, [user.userId, currentUserProfile?.userId, name, users])

  return (
    <Container>
      <HeaderPhoto photo={currentUserProfile?.photoURL}></HeaderPhoto>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <UserAvatar src={currentUserProfile?.photoURL} />
        {user.userId !== currentUserProfile?.userId ? (
          <UserActions>
            <UserActionsBtn>
              <IoIosMore size='2rem' color='rgb(29, 161, 242)' />
            </UserActionsBtn>
            <UserActionsBtn>
              <BiEnvelope size='2rem' color='rgb(29, 161, 242)' />
            </UserActionsBtn>
            <UserActionsBtn>
              <MdNotificationsActive size='2rem' color='rgb(29, 161, 242)' />
            </UserActionsBtn>

            {follows?.followed ? (
              <UnfollowBtn
                onClick={() =>
                  dispatch(onUnfollow(currentUserProfile?.userId))
                }>
                Unfollow
              </UnfollowBtn>
            ) : (
              <FollowBtn
                onClick={() => dispatch(onFollow(currentUserProfile?.userId))}>
                Follow
              </FollowBtn>
            )}
          </UserActions>
        ) : (
          <EditProfileBtn>Edit profile</EditProfileBtn>
        )}
      </div>
      <UserInitials>
        <DisplayName>{currentUserProfile?.displayName}</DisplayName>
        <UserName>@{currentUserProfile?.userName}</UserName>
      </UserInitials>
      <FollowsContainer>
        <FollowsInfo>
          {currentUserProfile?.followingAmount} Following
        </FollowsInfo>
        <FollowsInfo>
          {currentUserProfile?.followersAmount} Followers
        </FollowsInfo>
      </FollowsContainer>
    </Container>
  )
}

export default UserProfile
