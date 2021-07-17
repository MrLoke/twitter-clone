import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 5rem;
`

export const AddTweetMobileBtn = styled.button`
  background-color: ${({ theme }) => theme.primary500};
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  color: ${({ theme }) => theme.white};
  position: fixed;
  bottom: 7rem;
  right: 5%;
  width: 6rem;
  height: 6rem;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`
