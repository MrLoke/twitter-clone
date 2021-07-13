import { useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { AiOutlineTwitter } from 'react-icons/ai'
import { signUp } from 'redux/actions/authActions'
import {
  Form,
  Heading,
  Input,
  FileLabel,
  InputFile,
  SubmitBtn,
  ErrorMessage,
  LinkTo,
} from './SignupFormStyled'
import { auth, db, storage } from 'firebase-config'

const defaultAvatar =
  'https://thumbs.dreamstime.com/b/domy%C5%9Blny-wektor-ikony-profilu-awatara-zdj%C4%99cie-u%C5%BCytkownika-w-mediach-spo%C5%82eczno%C5%9Bciowych-ikona-fotografii-medi%C3%B3w-183042379.jpg'

const SignupForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
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

    const fileRef = storageRef.child(file?.name || defaultAvatar)
    await fileRef.put(file || defaultAvatar)

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
            photoURL: file ? await fileRef.getDownloadURL() : defaultAvatar,
          })
          .then(async () => {
            dispatch(
              signUp({
                userId: userAuth.user.uid,
                userName: username,
                displayName: displayname,
                email: email,
                photoURL: file ? await fileRef.getDownloadURL() : defaultAvatar,
              })
            )
          })
        history.push('/')
      })
      .catch((error) => {
        setLoading(false)
        setError(error.message)
      })
    setLoading(true)
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
              message: 'Username is too short 3 characters minimum',
            },
            maxLength: {
              value: 30,
              message: 'Username is too long',
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
              message: 'Display name is too short 3 characters minimum',
            },
            maxLength: {
              value: 30,
              message: 'Display name is too long',
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
        <FileLabel htmlFor='profile-avatar'>Set avatar</FileLabel>
        <InputFile type='file' onChange={onFileChange} id='profile-avatar' />
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
