import { authTypes } from 'redux/actionTypes/authTypes'

const initState = {
  userInfo: null,
  isLogged: false,
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLogged: true,
        authError: null,
      }

    case authTypes.LOGIN_ERROR:
      return {
        ...state,
        authError: action.payload,
      }

    case authTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        userInfo: null,
        isLogged: false,
        authError: null,
      }

    case authTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLogged: true,
        authError: null,
      }

    case authTypes.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.payload,
      }

    default:
      return state
  }
}

export default authReducer
