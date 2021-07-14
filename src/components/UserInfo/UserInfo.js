import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { applyTheme } from 'redux/actions/themeActions'
import { darkTheme, lightTheme } from 'theme/theme'
import useOutsideClick from 'hooks/useOutsideClick'
import { signOut } from 'redux/actions/authActions'
import { CgMoreAlt } from 'react-icons/cg'
import {
  Container,
  UserInitials,
  UserAvatar,
  DisplayName,
  UserName,
  ShowMore,
  UserMenuInfo,
  UserContainer,
  UserMenuItem,
} from './UserInfoStyled'

const UserInfo = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const user = useSelector((state) => state.auth.userInfo)
  const openMenuRef = useRef()
  const dispatch = useDispatch()
  const history = useHistory()

  useOutsideClick(openMenuRef, setOpenMenu)

  const changeTheme = (theme) => {
    dispatch(applyTheme(theme))
  }

  return (
    <Container ref={openMenuRef}>
      <UserMenuInfo openMenu={openMenu}>
        <UserContainer>
          <UserAvatar src={user.photoURL} alt={`${user.displayName} avatar`} />
          <UserInitials>
            <DisplayName>{user.displayName}</DisplayName>
            <UserName>@{user.userName}</UserName>
          </UserInitials>
        </UserContainer>

        <UserMenuItem>
          <button onClick={() => changeTheme(darkTheme)}>Dark</button>
          <button onClick={() => changeTheme(lightTheme)}>Light</button>
        </UserMenuItem>

        <UserMenuItem
          onClick={() => {
            dispatch(signOut())
            history.push('/login')
          }}>
          Log out @{user.userName}
        </UserMenuItem>
      </UserMenuInfo>

      <UserAvatar
        src={user.photoURL}
        alt={`${user.displayName} avatar`}
        onClick={() => setOpenMenu(!openMenu)}
      />

      <UserInitials>
        <DisplayName>{user.displayName}</DisplayName>
        <UserName>@{user.userName}</UserName>
      </UserInitials>

      <ShowMore onClick={() => setOpenMenu(!openMenu)}>
        <CgMoreAlt size='3rem' />
      </ShowMore>
    </Container>
  )
}

export default UserInfo
