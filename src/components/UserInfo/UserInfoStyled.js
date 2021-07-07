import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const UserAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
`

export const UserInitials = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 3rem;
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`

export const DisplayName = styled.p`
  color: ${({ theme }) => theme.white};
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.darkGray};
`

export const ShowMore = styled.span`
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`
