import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { logIn } from 'redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
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
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const loginError = useSelector((state) => state.auth.loginError)
  const history = useHistory()

  const onSubmit = async (value) => {
    dispatch(logIn(value, setLoading, () => history.push('/')))
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

      <SubmitBtn type='submit' data-testid='log-in'>
        {loading ? <LoadingSpinner smallSpinner /> : <p>Log in</p>}
      </SubmitBtn>
      <ForgotPassword>
        <Link to='/#'>Forgot password</Link>
      </ForgotPassword>
      {loginError ? <ErrorMessage>{loginError}</ErrorMessage> : null}
      <LinkTo>
        Dont have account?&nbsp;<Link to='/signup'>Sign up</Link>
      </LinkTo>
    </Form>
  )
}

export default LoginForm
