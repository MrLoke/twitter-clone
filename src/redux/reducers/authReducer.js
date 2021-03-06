import { authTypes } from 'redux/actionTypes/authTypes'

const initState = {
  userInfo: null,
  isLogged: false,
  loginError: null,
  signupError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLogged: true,
        loginError: null,
      }

    case authTypes.LOGIN_ERROR:
      return {
        ...state,
        userInfo: null,
        isLogged: false,
        loginError: action.payload,
      }

    case authTypes.SIGNUP_ERROR:
      return {
        ...state,
        userInfo: null,
        isLogged: false,
        signupError: action.payload,
      }

    case authTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        isLogged: true,
        signupError: null,
      }

    case authTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        userInfo: null,
        isLogged: false,
        loginError: null,
        signupError: null,
      }

    default:
      return state
  }
}

export default authReducer
