import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes/Routes'
import { appTheme } from 'theme/theme'
import { GlobalStyles } from 'theme/GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { auth, db } from 'firebase-config'
import { logIn, signOut } from 'redux/actions/authActions'

const Root = () => {
  const theme = useSelector((state) => state.theme.theme)
  const isLogged = useSelector((state) => state.user.isLogged)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLogged) {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          db.collection('users')
            .doc(userAuth.uid)
            .onSnapshot((snapshot) => {
              dispatch(
                logIn({
                  ...snapshot.data(),
                })
              )
            })
        } else {
          dispatch(signOut())
        }
      })
    }
  }, [dispatch])

  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={{ ...theme, ...appTheme }}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default Root
