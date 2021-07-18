import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  ${({ theme }) => theme.media.sm} {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
`
