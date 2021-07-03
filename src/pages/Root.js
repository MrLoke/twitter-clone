import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes/Routes'
import { appTheme } from 'theme/theme'
import { GlobalStyles } from 'theme/GlobalStyles'
// import theme from 'styled-theming'
import { darkTheme, lightTheme } from 'theme/theme'
import { useSelector } from 'react-redux'

// export const backgroundColor = theme('mode', {
//   light: 'rgba(255, 255, 255)',
//   dark: 'rgba(5, 5, 5)',
// })

// export const textColor = theme('mode', {
//   light: 'rgba(5, 5, 5)',
//   dark: 'rgba(255, 255, 255)',
// })

const Root = () => {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default Root
