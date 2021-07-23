import { modalActionTypes } from 'redux/actionTypes/modalTypes'

const initialState = {
  modalIsOpen: false,
  searchIsOpen: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalIsOpen: true,
      }
    case modalActionTypes.SHOW_SEARCH_MODAL:
      return {
        ...state,
        searchIsOpen: true,
      }
    case modalActionTypes.HIDE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
      }
    case modalActionTypes.HIDE_SEARCH_MODAL:
      return {
        ...state,
        searchIsOpen: false,
      }
    default:
      return state
  }
}

export default modalReducer
