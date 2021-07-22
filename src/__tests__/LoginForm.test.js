import { render, fireEvent, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import LoginForm from 'components/LoginForm/LoginForm'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { appTheme } from 'theme/theme'
import firebase from 'firebase/app'
import { logIn } from 'redux/actions/authActions'
import { authTypes } from 'redux/actionTypes/authTypes'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}))

function mockFirebaseService() {
  return new Promise((resolve) => resolve(true))
}

jest.mock(
  '../firebase-config/index.js',
  () => new Promise((resolve) => resolve(true))
)

// jest.mock('../firebase-config/index.js', () => {
//   return {
//     auth: jest.fn(() => ({
//       signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
//     })),
//   }
// })

describe('<LoginForm />', () => {
  let store
  beforeEach(() => {
    store = mockStore({})
  })

  test('renders the log in page with a form submission', async () => {
    const user = {
      email: 'first.last@yum.com',
      password: 'abd123',
    }
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={{ ...store.theme, ...appTheme }}>
            <Router>
              <LoginForm />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )

    store.dispatch(logIn(user.email, user.password)).then(() => {
      expect(mockFirebaseService).toHaveBeenCalled()
    })
    jest.mock(
      '../firebase-config/index.js',
      () =>
        new Promise((resolve) =>
          resolve({
            signInWithEmailAndPassword: () => {
              return { getIdToken: () => '123' }
            },
          })
        )
    )

    await act(async () => {
      // jest.mock('../firebase-config/index.js', () => ({
      //   signInWithEmailAndPassword(email, password) {
      //     return Promise.resolve({ name: 'someUser' })
      //   },
      // }))

      // firebase.auth().signInWithEmailAndPassword(email, password)
      // expect(dispatch.mock.calls.length).toBe(1)

      await fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'demo@gmail.com' },
      })
      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      })
      fireEvent.click(getByTestId('log-in'))
      // expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(
      //   'demo@gmail.com',
      //   'password'
      // )
      expect(getByPlaceholderText('Email').value).toBe('demo@gmail.com')
      expect(getByPlaceholderText('Password').value).toBe('password')
      expect(queryByTestId('error')).toBeFalsy()
    })
  })
})
