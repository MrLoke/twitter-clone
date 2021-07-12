import styled from 'styled-components/macro'
import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryBg};
  ${({ theme }) => theme.media.sm} {
    border-radius: ${({ theme }) => theme.utils.mediumRadius};
    width: 90vw;
    height: 30vh;
    margin-top: 5rem;
  }
  ${({ theme }) => theme.media.md} {
    width: 50vw;
    height: 30vh;
  }
  ${({ theme }) => theme.media.lg} {
    width: 35vw;
    height: 30vh;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CloseModalBtn = styled.span`
  padding: 1rem 1rem 0 1rem;
`
