import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signOut } from 'redux/actions/authActions'
import { applyTheme } from 'redux/actions/themeActions'
import { darkTheme, lightTheme } from 'theme/theme'
import Sidebar from 'components/Sidebar/Sidebar'
import MainFeed from 'components/MainFeed/MainFeed'
import FollowsRecommends from 'components/FollowsRecommends/FollowsRecommends'
import { Container } from './FeedPageStyled'

const FeedPage = () => {
  const user = useSelector((state) => state.user.userInfo)
  const dispatch = useDispatch()
  const history = useHistory()

  const changeTheme = (theme) => {
    dispatch(applyTheme(theme))
  }

  return (
    <Container>
      <Sidebar />
      <MainFeed>
        <div>
          <button
            onClick={() => {
              dispatch(signOut())
              history.push('/login')
            }}>
            Logout
          </button>
          <button onClick={() => changeTheme(darkTheme)}>Dark</button>
          <button onClick={() => changeTheme(lightTheme)}>Light</button>

          <img src={user.photoURL} alt='' width='60' height='60' />
          <p>{user.displayName}</p>
          <p>{user.userName}</p>
        </div>
      </MainFeed>
      <FollowsRecommends />
    </Container>
  )
}

export default FeedPage
