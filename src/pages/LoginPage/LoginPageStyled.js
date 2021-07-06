import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`
