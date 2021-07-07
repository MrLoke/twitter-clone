import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  width: 100%;
  padding: 1rem 2rem;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgb(28, 31, 35);
  }
`

export const UserContainer = styled.div`
  display: flex;
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
  margin-bottom: 0.3rem;
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.darkGray};
`

export const FollowBtn = styled.button`
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.primary500};
  font-weight: 600;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.primary500};
  outline: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`
