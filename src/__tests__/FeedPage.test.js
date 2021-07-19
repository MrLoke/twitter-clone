import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Tweet from 'components/Tweet/Tweet'
import FeedPage from 'pages/FeedPage/FeedPage'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import NotFound from 'pages/NotFound/NotFound'
import '@testing-library/jest-dom/extend-expect'
import { appTheme } from 'theme/theme'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'

describe('render feed page', () => {
  test('display loading spinner during fetch tweets', () => {
    const { getByText } = render(<FeedPage />)
    expect(<LoadingSpinner />)
  })
  test('render fetched tweets', async () => {
    const { getByText } = render(<Tweet />)
    const tweetText = await waitFor(() => getByText('Hello! First tweet'))
    expect(tweetText).toBeInTheDocument()
  })
})
