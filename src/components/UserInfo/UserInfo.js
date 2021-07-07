import { useSelector } from 'react-redux'
import { CgMoreAlt } from 'react-icons/cg'
import {
  Container,
  UserInitials,
  UserAvatar,
  DisplayName,
  UserName,
  ShowMore,
} from './UserInfoStyled'

const UserInfo = () => {
  const user = useSelector((state) => state.user.userInfo)

  return (
    <Container>
      <UserAvatar src={user.photoURL} alt='' />
      <UserInitials>
        <DisplayName>{user.displayName}</DisplayName>
        <UserName>@{user.userName}</UserName>
      </UserInitials>
      <ShowMore>
        <CgMoreAlt size='3rem' />
      </ShowMore>
    </Container>
  )
}

export default UserInfo
