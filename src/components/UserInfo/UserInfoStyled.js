import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  transition: all 0.2s linear;
  position: relative;
`

export const UserAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
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
  color: ${({ theme }) => theme.primaryText};
  font-weight: 500;
  width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.darkGray};
  font-weight: 500;
  width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const ShowMore = styled.span`
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: ${({ theme }) => theme.utils.bigRadius};
    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
    }
  }
`

export const UserMenuInfo = styled.div`
  display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
  flex-direction: column;
  width: 300px;
  position: absolute;
  top: -200px;
  left: -20px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primaryBg};
  box-shadow: 0px 0px 10px 2px #3d3d3d;
  border-radius: ${({ theme }) => theme.utils.mediumRadius};
`

export const UserContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 1rem;
`

export const UserMenuItem = styled.div`
  font-weight: 300;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding: 1.5rem 0.5rem;
  cursor: pointer;
`
