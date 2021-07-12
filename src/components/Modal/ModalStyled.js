import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  width: 40vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.primaryBg};
  border-radius: ${({ theme }) => theme.utils.mediumRadius};
`
