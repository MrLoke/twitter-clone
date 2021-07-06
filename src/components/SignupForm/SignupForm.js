import { useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { AiOutlineTwitter } from 'react-icons/ai'
import { logInFailure, signUp } from 'redux/actions/authActions'
import {
  Form,
  Heading,
  Input,
  SubmitBtn,
  ErrorMessage,
  LinkTo,
} from './SignupFormStyled'
import { auth, db, storage } from 'firebase-config'

const SignupForm = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const dispatch = useDispatch()
  const history = useHistory()

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = async (value) => {
    const { username, displayname, email, password } = value
    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userAuth) => {
        db.collection('users')
          .doc(userAuth.user.uid)
          .set({
            userId: userAuth.user.uid,
            userName: username,
            displayName: displayname,
            email: email,
            photoURL: await fileRef.getDownloadURL(),
          })
        userAuth.user
          .updateProfile({
            displayName: username,
            email: email,
            photoURL: await fileRef.getDownloadURL(),
          })
          .then(async () => {
            dispatch(
              signUp({
                userId: userAuth.user.uid,
                userName: username,
                displayName: displayname,
                email: email,
                photoURL: await fileRef.getDownloadURL(),
              })
            )
          })
        history.push('/')
      })
      .catch((error) => {
        dispatch(logInFailure(error.message))
      })
  }

  return (
    <>
      <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <AiOutlineTwitter size='60px' color='rgb(29, 161, 242)' />
        <Heading>Sign up to Twitter</Heading>
        <Input
          type='text'
          id='username'
          name='username'
          placeholder='@username'
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username is to short 3 characters minimum',
            },
          })}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
        <Input
          type='text'
          id='displayname'
          name='displayname'
          placeholder='Display name'
          {...register('displayname', {
            required: 'Display name is required',
            minLength: {
              value: 3,
              message: 'Display name is to short 3 characters minimum',
            },
          })}
        />
        {errors.displayname && (
          <ErrorMessage>{errors.displayname.message}</ErrorMessage>
        )}
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          {...register('password', {
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'password is to short 6 characters minimum',
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Input
          type='password'
          id='password_repeat'
          name='password_repeat'
          placeholder='Confirm password'
          {...register('password_repeat', {
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        {errors.password_repeat && (
          <ErrorMessage>{errors.password_repeat.message}</ErrorMessage>
        )}
        <label htmlFor='profile-avatar'>Set avatar</label>
        <input type='file' onChange={onFileChange} id='profile-avatar' />
        <SubmitBtn type='submit'>
          {loading ? <LoadingSpinner smallSpinner /> : <p>Create account</p>}
        </SubmitBtn>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <LinkTo>
          Already have account?&nbsp;<Link to='/login'>Login</Link>
        </LinkTo>
      </Form>
    </>
  )
}

export default SignupForm
