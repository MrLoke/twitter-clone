import { useDispatch } from 'react-redux'
import { applyTheme } from 'redux/actions/themeActions'
import { darkTheme, lightTheme } from 'theme/theme'

const FeedPage = () => {
  const dispatch = useDispatch()

  const changeTheme = (theme) => {
    dispatch(applyTheme(theme))
  }

  return (
    <div>
      <button onClick={() => changeTheme(darkTheme)}>Dark</button>
      <button onClick={() => changeTheme(lightTheme)}>Light</button>
    </div>
  )
}

export default FeedPage
