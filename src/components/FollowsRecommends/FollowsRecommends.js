import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RecommendedUser from 'components/RecommendedUser/RecommendedUser'
import {
  Wrapper,
  Container,
  Header,
  ShowMore,
  FooterInfo,
} from './FollowsRecommendsStyled'

const FollowsRecommends = () => {
  const user = useSelector((state) => state.user.userInfo)

  return (
    <Wrapper>
      <Container>
        <Header>Who to follow</Header>
        <RecommendedUser user={user} />
        <RecommendedUser user={user} />
        <RecommendedUser user={user} />
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
