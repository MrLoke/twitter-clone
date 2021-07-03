import { NotFoundWrapper, StyledLink } from './NotFoundStyled'

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>This page doesn't exist</h1>
      <StyledLink to='/' aria-label='back-to-home'>
        Back to home
      </StyledLink>
    </NotFoundWrapper>
  )
}

export default NotFound
