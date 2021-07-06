import { authTypes } from 'redux/actionTypes/authTypes'

export const logIn = (user) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: user,
})

export const logInFailure = (error) => ({
  type: authTypes.LOGIN_ERROR,
  payload: error,
})

export const signUp = (user) => ({
  type: authTypes.SIGNUP_SUCCESS,
  payload: user,
})

export const signUpFailure = (error) => ({
  type: authTypes.SIGNUP_ERROR,
  payload: error,
})

export const signOut = () => ({
  type: authTypes.SIGNOUT_SUCCESS,
})
