import { appTypes } from 'redux/actionTypes/appTypes'

const initialState = {
  users: [],
  feed: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      }

    case appTypes.FETCH_FEED:
      return {
        ...state,
        feed: action.payload,
      }

    case appTypes.PRESS_LIKE:
    case appTypes.PRESS_DISLIKE:
      return {
        ...state,
      }

    case appTypes.CLEAR_DATA:
      return initialState

    default:
      return state
  }
}

export default usersReducer
