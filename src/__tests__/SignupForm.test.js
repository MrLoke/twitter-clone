import { render, fireEvent, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import SignupForm from 'components/SignupForm/SignupForm'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { appTheme } from 'theme/theme'
import userEvent from '@testing-library/user-event'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

describe('<SignUp />', () => {
  afterEach(() => {
    jest.resetAllMocks()
    cleanup()
  })

  test('test location push to feed page', async () => {
    const history = createMemoryHistory()

    const { getByTestId } = render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={{ ...store.theme, ...appTheme }}>
            <Router history={history}>
              <SignupForm />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )

    await act(async () => {
      const submitBtn = getByTestId('sign-up')
      expect(submitBtn).toBeInTheDocument()

      userEvent.click(submitBtn)

      expect(history.length).toBe(1)
      expect(history.location.pathname).toBe('/')
    })
  })

  test('renders the sign up page with a form submission', async () => {
    const history = createMemoryHistory()
    const route = '/signup'
    history.push(route)

    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={{ ...store.theme, ...appTheme }}>
            <Router history={history}>
              <SignupForm />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )

    await act(async () => {
      fireEvent.change(getByPlaceholderText('@username'), {
        target: { value: 'demo' },
      })
      fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'demo@gmail.com' },
      })
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      })
      fireEvent.click(getByTestId('sign-up'))

      expect(getByPlaceholderText('Email').value).toBe('demo@gmail.com')
      expect(getByPlaceholderText('Password').value).toBe('password')
      expect(queryByTestId('error')).toBeFalsy()
    })
  })
})
