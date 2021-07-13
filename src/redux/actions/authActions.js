import { authTypes } from 'redux/actionTypes/authTypes'

export const logIn = (user) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: user,
})

export const signUp = (user) => ({
  type: authTypes.SIGNUP_SUCCESS,
  payload: user,
})

export const signOut = () => ({
  type: authTypes.SIGNOUT_SUCCESS,
})
