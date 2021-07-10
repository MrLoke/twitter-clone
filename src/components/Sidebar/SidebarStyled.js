import styled from 'styled-components/macro'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  position: sticky;
  top: 0;
  display: none;
  ${({ theme }) => theme.media.sm} {
    display: flex;
  }
`

export const NavContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  padding: 1rem 1rem;
  font-size: ${({ theme }) => theme.size.m};
  font-weight: 500;
  transition: all 0.2s linear;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    color: ${({ theme }) => theme.primary500};
  }
`

export const ItemName = styled.span`
  padding-left: 2rem;
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: flex;
  }
`

export const TweetBtn = styled.button`
  background-color: ${({ theme }) => theme.primary500};
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.size.s};
  font-weight: 600;
  width: 100%;
  letter-spacing: 0.1rem;
  margin-top: 2rem;
  border: none;
  outline: none;
  padding: 1.5rem;
  cursor: pointer;
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: flex;
    justify-content: center;
  }
`

export const MobileTweetBtn = styled.button`
  background-color: ${({ theme }) => theme.primary500};
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  color: ${({ theme }) => theme.white};
  margin-top: 1rem;
  width: 5rem;
  height: 5rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`
