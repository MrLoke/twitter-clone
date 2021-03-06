import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import Routes from 'routes/Routes'
import { appTheme } from 'theme/theme'
import { GlobalStyles } from 'theme/GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeed, fetchUsersData } from 'redux/actions/appActions'

const Root = () => {
  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()

  useEffect(() => {
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

export default Root
