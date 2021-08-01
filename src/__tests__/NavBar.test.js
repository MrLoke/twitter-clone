import { render, fireEvent, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import NavBar from 'components/NavBar/NavBar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { appTheme } from 'theme/theme'

jest.mock('react-router-dom')

test('render the nav bar component', () => {
  const history = createMemoryHistory()
  const route = '/'
  history.push(route)

  const { getByText, getByTestId } = render(
    <ThemeProvider theme={{ ...store.theme, ...appTheme }}>
      <Router history={history}>
        <NavBar />
      </Router>
    </ThemeProvider>
  )

  const headerText = getByTestId('header')
  expect(headerText).toHaveTextContent('Home')
})
