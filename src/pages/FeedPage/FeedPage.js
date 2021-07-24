import { useSelector } from 'react-redux'
import NavBar from 'components/NavBar/NavBar'
import AddTweet from 'components/AddTweet/AddTweet'
import Tweet from 'components/Tweet/Tweet'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { likeTweet, dislikeTweet } from 'redux/actions/appActions'
import { MainFeed } from './FeedPageStyled'

const FeedPage = () => {
  const feed = useSelector((state) => state.app.feed)

  return (
    <MainFeed>
      <NavBar text='Home' />
      <AddTweet />
      {feed.length > 0 ? (
        feed.map((tweet) => (
          <Tweet
            key={tweet.id}
            onPressLike={likeTweet}
            onPressDislike={dislikeTweet}
            tweet={tweet}
          />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </MainFeed>
  )
}

export default FeedPage
