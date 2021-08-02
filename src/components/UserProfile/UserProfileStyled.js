import styled from 'styled-components/macro'

export const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

export const HeaderPhoto = styled.div`
  height: 15rem;
  width: 100%;
  background: url(${({ photo }) => photo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  cursor: pointer;
  ${({ theme }) => theme.media.md} {
    height: 20rem;
  }
`

export const UserAvatar = styled.img`
  width: 9rem;
  height: 9rem;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -3rem;
  margin-left: 1rem;
  border: 0.3rem solid ${({ theme }) => theme.primaryBg};
  cursor: pointer;
  ${({ theme }) => theme.media.sm} {
    width: 12rem;
    height: 12rem;
    margin-top: -6rem;
  }
  ${({ theme }) => theme.media.md} {
    width: 15rem;
    height: 15rem;
  }
`

export const UserInitials = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-left: 2rem;
  padding-right: 3rem;
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`

export const DisplayName = styled.p`
  color: ${({ theme }) => theme.primaryText};
  font-weight: 500;
  width: 50%;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.darkGray};
  font-weight: 500;
  width: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const FollowsContainer = styled.div`
  display: flex;
  margin: 2rem 2rem;
`

export const FollowsInfo = styled.div`
  display: flex;
  margin-right: 2rem;
`

export const UserActions = styled.div`
  display: flex;
  margin-right: 1.5rem;
  margin-top: 1rem;
  ${({ theme }) => theme.media.sm} {
    margin-top: 0;
  }
`

export const UserActionsBtn = styled.span`
  display: flex;
  padding: 1rem;
  margin: 0 0.5rem;
  border: 1px solid rgb(29, 161, 242);
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
`

export const FollowBtn = styled.button`
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.primary500};
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  margin-left: 0.5rem;
  border: 1px solid ${({ theme }) => theme.primary500};
  outline: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`

export const UnfollowBtn = styled(FollowBtn)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary500};
`

export const EditProfileBtn = styled(FollowBtn)`
  margin-right: 2rem;
  padding: 1rem 2rem;
`
