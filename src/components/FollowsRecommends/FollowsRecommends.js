import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import RecommendedUser from 'components/RecommendedUser/RecommendedUser'
import {
  Wrapper,
  Container,
  Header,
  ShowMore,
  FooterInfo,
} from './FollowsRecommendsStyled'

const FollowsRecommends = () => {
  const users = useSelector((state) => state.app.users)

  return (
    <Wrapper>
      <Container>
        <Header>Who to follow</Header>
        {users.length > 0 ? (
          users
            .slice(0, 4)
            .map((user) => <RecommendedUser key={user.id} user={user} />)
        ) : (
          <LoadingSpinner />
        )}
        <ShowMore>
          <Link to='#'>Show more</Link>
        </ShowMore>
      </Container>
      <FooterInfo>
        Terms of Service Privacy Policy Cookie Policy Ads info More © 2021
        Twitter, Inc.
      </FooterInfo>
    </Wrapper>
  )
}

export default FollowsRecommends
