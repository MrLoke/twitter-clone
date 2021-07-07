import {
  Container,
  UserContainer,
  UserInitials,
  UserAvatar,
  DisplayName,
  UserName,
  FollowBtn,
} from './RecommendedUserStyled'

const RecommendedUser = ({ user }) => {
  return (
    <Container>
      <UserContainer>
        <UserAvatar src={user.photoURL} alt='' />
        <UserInitials>
          <DisplayName>{user.displayName}</DisplayName>
          <UserName>@{user.userName}</UserName>
        </UserInitials>
      </UserContainer>
      <FollowBtn>Follow</FollowBtn>
    </Container>
  )
}

export default RecommendedUser
