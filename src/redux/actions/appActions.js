import { db } from 'firebase-config'
import { usersTypes } from 'redux/actionTypes/appTypes'

export const fetchUsersData = () => {
  return (dispatch) => {
    db.collection('users').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        const user = doc.data()
        dispatch({ type: usersTypes.FETCH_USERS, payload: user })
      })
    })
  }
}

// export const fetchUsersData = (users) => ({
//   type: usersTypes.FETCH_USERS,
//   payload: users,
// })

export const fetchFeed = () => {
  return (dispatch) => {
    db.collection('feed')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          const feed = doc.data()
          dispatch({ type: usersTypes.FETCH_FEED, payload: feed })
        })
      })
  }
}

export const clearData = () => {
  return (dispatch) => {
    dispatch({ type: usersTypes.CLEAR_DATA })
  }
}
