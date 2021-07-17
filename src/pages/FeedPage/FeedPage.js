import { useSelector } from 'react-redux'
import AddTweet from 'components/AddTweet/AddTweet'
import Tweet from 'components/Tweet/Tweet'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { MainFeed } from './FeedPageStyled'

const FeedPage = () => {
  const feed = useSelector((state) => state.app.feed)

  return (
    <MainFeed>
      <AddTweet />
      {feed.length > 0 ? (
        feed.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      ) : (
        <LoadingSpinner />
      )}
    </MainFeed>
  )
}

export default FeedPage
