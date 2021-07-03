import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>theme.colors.primaryLightBg};
`
