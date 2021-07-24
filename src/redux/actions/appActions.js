import { auth, db } from 'firebase-config'
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

export const likeTweet = (docId, userId) => {
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

export const dislikeTweet = (docId, userId) => {
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

export const likeComment = (docId, comId, userId) => {
  return (dispatch) => {
    const userComments = db
      .collection('feed')
      .doc(docId)
      .collection('comments')
      .doc(comId)

    userComments
      .collection('likes')
      .doc(userId)
      .set({
        liked: true,
      })
      .then(() => {
        userComments.update({
          likesCount: firebase.firestore.FieldValue.increment(1),
        })
      })

    dispatch({ type: appTypes.PRESS_LIKE })
  }
}

export const dislikeComment = (docId, comId, userId) => {
  return (dispatch) => {
    const userComments = db
      .collection('feed')
      .doc(docId)
      .collection('comments')
      .doc(comId)

    userComments
      .collection('likes')
      .doc(userId)
      .delete()
      .then(() => {
        userComments.update({
          likesCount: firebase.firestore.FieldValue.increment(-1),
        })
      })

    dispatch({ type: appTypes.PRESS_DISLIKE })
  }
}

export const onFollow = (userId) => {
  return (dispatch) => {
    db.collection('following')
      .doc(auth.currentUser.uid)
      .collection('userFollowing')
      .doc(userId)
      .set({ followed: true })

    db.collection('users')
      .doc(auth.currentUser.uid)
      .update({
        followingAmount: firebase.firestore.FieldValue.increment(1),
      })

    db.collection('users')
      .doc(userId)
      .update({
        followersAmount: firebase.firestore.FieldValue.increment(1),
      })

    dispatch({ type: appTypes.FOLLOW })
  }
}

export const onUnfollow = (userId) => {
  return (dispatch) => {
    db.collection('following')
      .doc(auth.currentUser.uid)
      .collection('userFollowing')
      .doc(userId)
      .delete()

    db.collection('users')
      .doc(auth.currentUser.uid)
      .update({
        followingAmount: firebase.firestore.FieldValue.increment(-1),
      })

    db.collection('users')
      .doc(userId)
      .update({
        followersAmount: firebase.firestore.FieldValue.increment(-1),
      })

    dispatch({ type: appTypes.UNFOLLOW })
  }
}

export const clearData = () => {
  return (dispatch) => {
    dispatch({ type: appTypes.CLEAR_DATA })
  }
}
