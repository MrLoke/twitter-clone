import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 5rem;
`

export const MainFeed = styled.div`
  width: 100%;
  max-width: 600px;
  ${({ theme }) => theme.media.sm} {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
`
