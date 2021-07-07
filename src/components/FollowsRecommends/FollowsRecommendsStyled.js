import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: none;
  ${({ theme }) => theme.media.md} {
    margin-top: 2rem;
    height: 400px;
    width: 350px;
    margin-left: 3rem;
    border-radius: ${({ theme }) => theme.utils.mediumRadius};
    position: sticky;
    top: 2rem;
    display: flex;
    flex-direction: column;
  }
`

export const Container = styled.div`
  display: none;
  ${({ theme }) => theme.media.md} {
    background-color: ${({ theme }) => theme.secondaryBg};
    border-radius: ${({ theme }) => theme.utils.mediumRadius};
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
  }
`

export const Header = styled.h2`
  padding: 0 2rem 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

export const ShowMore = styled.p`
  padding: 2rem 2rem 0 2rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary500};
  }
`

export const FooterInfo = styled.p`
  margin-top: 2rem;
  padding: 0 2rem;
  color: ${({ theme }) => theme.darkGray};
`
