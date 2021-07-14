import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { logIn } from 'redux/actions/authActions'
import { useDispatch } from 'react-redux'
import { AiOutlineTwitter } from 'react-icons/ai'
import {
  Form,
  Heading,
  Input,
  ForgotPassword,
  SubmitBtn,
  ErrorMessage,
  LinkTo,
} from './LoginFormStyled'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (value) => {
    dispatch(logIn(value, () => history.push('/')))
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userAuth) => {
    //     db.collection('users')
    //       .doc(userAuth.user.uid)
    //       .onSnapshot((snapshot) => {
    //         dispatch(
    //           logIn({
    //             ...snapshot.data(),
    //           })
    //         )
    //       })
    //     history.push('/')
    //   })
    //   .catch((error) => {
    //     setLoading(false)
    //     setError(error.message)
    //   })
    // setLoading(true)
  }

  return (
    <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <AiOutlineTwitter size='60px' color='rgb(29, 161, 242)' />
      <Heading>Login to Twitter</Heading>
      <Input
        type='email'
        id='email'
        name='email'
        placeholder='Email'
        {...register('email')}
      />
      <Input
        type='password'
        id='password'
        name='password'
        placeholder='Password'
        {...register('password')}
      />

      <SubmitBtn type='submit'>
        {loading ? <LoadingSpinner smallSpinner /> : <p>Log in</p>}
      </SubmitBtn>
      <ForgotPassword>
        <Link to='/#'>Forgot password</Link>
      </ForgotPassword>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <LinkTo>
        Dont have account?&nbsp;<Link to='/signup'>Sign up</Link>
      </LinkTo>
    </Form>
  )
}

export default LoginForm
