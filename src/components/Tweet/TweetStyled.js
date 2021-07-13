import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  padding: 1.5rem 1rem 1rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.2s linear;
  &:hover {
    background-color: ${({ theme }) => theme.onHover};
  }
  &:nth-child(2) {
    border-top: 1px solid ${({ theme }) => theme.borderColor};
  }
`

export const UserAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 1.2rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
`

export const TweetFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const UserInitials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ShowMoreTweet = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.2);
  }
`

export const DisplayName = styled.p`
  color: ${({ theme }) => theme.primaryText};
  font-size: ${({ theme }) => theme.size.xs};
  max-width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.size.s};
    max-width: 140px;
  }
  ${({ theme }) => theme.media.md} {
    max-width: 200px;
  }
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.darkGray};
  font-size: ${({ theme }) => theme.size.xs};
  max-width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.size.s};
    max-width: 140px;
  }
  ${({ theme }) => theme.media.md} {
    max-width: 160px;
  }
`

export const TweetMessage = styled.p`
  margin: 0rem 0 0.5rem 0;
  font-size: ${({ theme }) => theme.size.xs};
  font-weight: 300;
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.size.s};
  }
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
  width: 4rem;
  height: 4rem;
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
  margin: 0.5rem 0;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
`
