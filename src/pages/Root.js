import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import Routes from 'routes/Routes'
import { appTheme } from 'theme/theme'
import { GlobalStyles } from 'theme/GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from 'firebase-config'
import { logIn, signOut } from 'redux/actions/authActions'
import { fetchFeed, fetchUsersData } from 'redux/actions/appActions'

const SpecialModalBackground = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(255, 255, 255, 0.3);
`

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

    dispatch(fetchUsersData())
    dispatch(fetchFeed())
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
        <ModalProvider backgroundComponent={SpecialModalBackground}>
          <GlobalStyles />
          <Routes />
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

export default Root
