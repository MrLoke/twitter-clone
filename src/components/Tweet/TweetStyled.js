import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  padding: 1.5rem 0.5rem 1rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

export const UserAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 1rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
`

export const TweetFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const UserInitials = styled.div`
  display: flex;
`

export const DisplayName = styled.p`
  color: ${({ theme }) => theme.white};
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.darkGray};
`

export const TweetMessage = styled.p`
  margin: 0.5rem 0 1rem 0;
`

export const TweetActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => theme.media.md} {
    width: 80%;
  }
`

export const TweetActionBtn = styled.span`
  display: flex;
  justify-content: ${({ isLike }) => (isLike ? 'space-around' : 'center')};
  align-items: center;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  transition: all 0.2s linear;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  &:hover {
    background-color: ${({ isLike }) =>
      isLike ? 'rgba(244, 67, 54, 0.1)' : 'rgba(29, 161, 242, 0.2)'};
  }
`

export const ImageTweet = styled.img`
  max-height: 100%;
  max-width: 100%;
`
