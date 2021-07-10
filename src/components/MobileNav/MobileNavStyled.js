import styled from 'styled-components/macro'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryBg};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Item = styled.li``
