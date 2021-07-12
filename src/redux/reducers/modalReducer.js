import { modalActionTypes } from 'redux/actionTypes/modalTypes'

const initialState = {
  modalIsOpen: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalIsOpen: true,
      }
    case modalActionTypes.HIDE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
      }
    default:
      return state
  }
}

export default modalReducer
