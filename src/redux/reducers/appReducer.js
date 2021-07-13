import { usersTypes } from 'redux/actionTypes/appTypes'

const initialState = {
  users: [],
  feed: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersTypes.FETCH_USERS:
      return {
        ...state,
        users: [...state.users, action.payload],
      }

    case usersTypes.FETCH_FEED:
      return {
        ...state,
        feed: [...state.feed, action.payload],
      }

    case usersTypes.CLEAR_DATA:
      return initialState

    default:
      return state
  }
}

export default usersReducer
