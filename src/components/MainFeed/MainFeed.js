import { Container } from './MainFeedStyled'

const MainFeed = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  )
}

export default MainFeed
