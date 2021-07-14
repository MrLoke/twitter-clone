import { auth, db } from 'firebase-config'
import { authTypes } from 'redux/actionTypes/authTypes'
import { storage } from 'firebase-config'
import firebase from 'firebase/app'

export const logIn = (value, setLoading, callback) => {
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
        setLoading(false)
        dispatch({
          type: authTypes.LOGIN_ERROR,
          payload: error.message,
        })
      })
    setLoading(true)
  }
}

export const signUp = (value, setLoading, file, defaultAvatar, callback) => {
  return async (dispatch) => {
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file?.name || defaultAvatar)
    await fileRef.put(file || defaultAvatar)

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
          .then(() => {
            db.collection('users')
              .doc(userAuth.user.uid)
              .onSnapshot((snapshot) => {
                dispatch({
                  type: authTypes.SIGNUP_SUCCESS,
                  payload: snapshot.data(),
                })
              })
            callback()
          })
      })
      .catch((error) => {
        setLoading(false)
        dispatch({
          type: authTypes.SIGNUP_ERROR,
          payload: error.message,
        })
      })
    setLoading(true)
  }
}

export const signOut = () => ({
  type: authTypes.SIGNOUT_SUCCESS,
})
