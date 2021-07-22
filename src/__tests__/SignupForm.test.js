import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import SignupForm from 'components/SignupForm/SignupForm'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { appTheme } from 'theme/theme'
import { authMock } from 'setupTests'
import firebase from 'firebase/app'
firebase.auth = authMock
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}))
jest.mock('../firebase-config/index.js', () => {
  return {
    auth: jest.fn(() => ({
      createUserWithEmailAndPassword: jest.fn(() => Promise.resolve()),
    })),
  }
})
// const firebase = {
//   auth: jest.fn(() => ({
//     createUserWithEmailAndPassword: jest.fn(() =>
//       Promise.resolve({
//         user: {
//           updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
//         },
//       })
//     ),
//   })),
// }

describe('<SignUp />', () => {
  test('renders the sign up page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={{ ...store.theme, ...appTheme }}>
            <Router>
              <SignupForm />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )

    const submitBtn = getByTestId('sign-up')

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('@username'), {
        target: { value: 'demo' },
      })
      await fireEvent.change(getByPlaceholderText('Email'), {
        target: { value: 'demo@gmail.com' },
      })
      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      })
      fireEvent.click(getByTestId('sign-up'))

      fireEvent.click(submitBtn)

      expect(getByPlaceholderText('Email').value).toBe('demo@gmail.com')
      expect(getByPlaceholderText('Password').value).toBe('password')
      expect(queryByTestId('error')).toBeFalsy()
    })
  })
})
