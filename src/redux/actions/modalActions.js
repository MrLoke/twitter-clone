import { modalActionTypes } from 'redux/actionTypes/modalTypes'

export const showModal = () => ({
  type: modalActionTypes.SHOW_MODAL,
})

export const hideModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
})

export const showSearchModal = () => ({
  type: modalActionTypes.SHOW_SEARCH_MODAL,
})

export const hideSearchModal = () => ({
  type: modalActionTypes.HIDE_SEARCH_MODAL,
})
