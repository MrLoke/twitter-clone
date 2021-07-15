import { db } from 'firebase-config'
import { appTypes } from 'redux/actionTypes/appTypes'
import firebase from 'firebase/app'

export const fetchUsersData = () => {
  return (dispatch) => {
    db.collection('users').onSnapshot((snapshot) => {
      let users = snapshot.docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        return { id, ...data }
      })
      dispatch({ type: appTypes.FETCH_USERS, payload: users })
    })
  }
}

export const fetchFeed = () => {
  return (dispatch) => {
    db.collection('feed')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        let feed = snapshot.docs.map((doc) => {
          const data = doc.data()
          const id = doc.id
          return { id, ...data }
        })
        dispatch({ type: appTypes.FETCH_FEED, payload: feed })
      })
  }
}

export const onLikePress = (docId, userId) => {
  return (dispatch) => {
    const userPosts = db.collection('feed').doc(docId)

    userPosts
      .collection('likes')
      .doc(userId)
      .set({
        liked: true,
      })
      .then(() => {
        userPosts.update({
          likesCount: firebase.firestore.FieldValue.increment(1),
        })
      })
    dispatch({ type: appTypes.PRESS_LIKE })
  }
}

export const onDislikePress = (docId, userId) => {
  return (dispatch) => {
    const userPosts = db.collection('feed').doc(docId)

    userPosts
      .collection('likes')
      .doc(userId)
      .delete()
      .then(() => {
        userPosts.update({
          likesCount: firebase.firestore.FieldValue.increment(-1),
        })
      })
    dispatch({ type: appTypes.PRESS_DISLIKE })
  }
}

export const onFollow = (docId, userId) => {
  return (dispatch) => {
    const userPosts = db.collection('users').doc(docId)

    userPosts
      .collection('followers')
      .doc(userId)
      .set({
        followed: true,
      })
      .then(() => {
        userPosts.update({
          followersCount: firebase.firestore.FieldValue.increment(1),
        })
      })
    dispatch({ type: appTypes.FOLLOW })
  }
}

export const onUnfollow = (docId, userId) => {
  return (dispatch) => {
    const userPosts = db.collection('users').doc(docId)

    userPosts
      .collection('followers')
      .doc(userId)
      .delete()
      .then(() => {
        userPosts.update({
          followersCount: firebase.firestore.FieldValue.increment(-1),
        })
      })
    dispatch({ type: appTypes.UNFOLLOW })
  }
}

export const clearData = () => {
  return (dispatch) => {
    dispatch({ type: appTypes.CLEAR_DATA })
  }
}
