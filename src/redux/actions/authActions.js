import { authActionTypes } from 'redux/actionTypes/authActionTypes'

export const signInSuccess = (user) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = (error) => ({
  type: authActionTypes.SIGN_IN_FAILURE,
  payload: error,
})
