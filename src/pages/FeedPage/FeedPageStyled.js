import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200vh;
  max-width: 1440px;
  margin: auto;
`

export const MainFeed = styled.div`
  width: 100%;
  max-width: 600px;
  border-right: 1px solid rgb(47, 51, 54);
  ${({ theme }) => theme.media.md} {
    border-right: 1px solid rgb(47, 51, 54);
  }
  ${({ theme }) => theme.media.md} {
    border-right: 1px solid rgb(47, 51, 54);
  }
`
