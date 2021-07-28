import { render, fireEvent, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import FeedPage from 'pages/FeedPage/FeedPage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { appTheme } from 'theme/theme'

jest.mock('react-router-dom')

describe('<FeedPage />', () => {
  afterEach(() => {
    jest.resetAllMocks()
    cleanup()
  })

  test('render the feed page', () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={{ ...store.theme, ...appTheme }}>
            <Router history={history}>
              <FeedPage />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy()
    expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy()
    expect(getAllByPlaceholderText('Email address')).toBeTruthy()
    expect(getAllByText('Try it now')).toBeTruthy()
    expect(
      getAllByText(
        'Ready to watch? Enter your email to create or restart your membership.'
      )
    ).toBeTruthy()
  })
})
