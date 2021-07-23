import { useDispatch } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import { StyledModal, Container, CloseModalBtn } from './ModalStyled'

const Modal = ({ children, modalIsOpen, hideModal }) => {
  const dispatch = useDispatch()

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onBackgroundClick={() => dispatch(hideModal())}
      onEscapeKeydown={() => dispatch(hideModal())}>
      <Container>
        <CloseModalBtn>
          <IoCloseOutline
            onClick={() => dispatch(hideModal())}
            size='3rem'
            style={{ cursor: 'pointer' }}
          />
        </CloseModalBtn>
        {children}
      </Container>
    </StyledModal>
  )
}

export default Modal
