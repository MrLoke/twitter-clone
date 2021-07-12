import { modalActionTypes } from 'redux/actionTypes/modalTypes'

export const showModal = () => ({
  type: modalActionTypes.SHOW_MODAL,
})

export const hideModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
})
