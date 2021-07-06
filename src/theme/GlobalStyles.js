import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.7rem;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.primaryText};
  }
`
