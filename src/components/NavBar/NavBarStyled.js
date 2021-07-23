import styled from 'styled-components/macro'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryBg};
  position: sticky;
  top: 0;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

export const Header = styled.h3`
  font-weight: 500;
`

export const BackBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  margin-right: 2rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.2);
  }
`
