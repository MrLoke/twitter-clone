import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from 'redux/actions/modalActions'
import { StyledModal } from './ModalStyled'

const Modal = ({ children }) => {
  const modalIsOpen = useSelector((state) => state.modal.modalIsOpen)
  const dispatch = useDispatch()

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onBackgroundClick={() => dispatch(hideModal())}
      onEscapeKeydown={() => dispatch(hideModal())}>
      {children}
    </StyledModal>
  )
}

export default Modal
