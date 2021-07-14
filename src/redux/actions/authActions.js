import { auth, db } from 'firebase-config'
import { authTypes } from 'redux/actionTypes/authTypes'
import firebase from 'firebase/app'

export const logIn = (value, callback) => {
  return (dispatch) => {
    auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((userAuth) => {
        db.collection('users')
          .doc(userAuth.user.uid)
          .onSnapshot((snapshot) => {
            dispatch({
              type: authTypes.LOGIN_SUCCESS,
              payload: snapshot.data(),
            })
          })
        callback()
      })
      .catch((error) => {
        dispatch({
          type: authTypes.LOGIN_ERROR,
          payload: error.message,
        })
      })
  }
}

export const signUp = (value, file, fileRef, defaultAvatar, callback) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(value.email, value.password)
      .then(async (userAuth) => {
        db.collection('users')
          .doc(userAuth.user.uid)
          .set({
            userId: userAuth.user.uid,
            userName: value.username,
            displayName: value.displayname,
            email: value.email,
            createdAt: userAuth.user.metadata.creationTime,
            followersCount: 0,
            followers: firebase.firestore.FieldValue.arrayUnion({
              user: '',
            }),
            photoURL: file ? await fileRef.getDownloadURL() : defaultAvatar,
          })
          .then(async () => {
            dispatch({
              type: authTypes.SIGNUP_SUCCESS,
              payload: {
                userId: userAuth.user.uid,
                userName: value.username,
                displayName: value.displayname,
                email: value.email,
                createdAt: userAuth.user.metadata.creationTime,
                followersCount: 0,
                followers: firebase.firestore.FieldValue.arrayUnion({
                  user: '',
                }),
                photoURL: file ? await fileRef.getDownloadURL() : defaultAvatar,
              },
            })
          })
        callback()
      })
      .catch((error) => {
        dispatch({
          type: authTypes.SIGNUP_ERROR,
          payload: error.message,
        })
      })
  }
}

export const signOut = () => ({
  type: authTypes.SIGNOUT_SUCCESS,
})
