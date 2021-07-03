import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
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
  const history = useHistory()

  const onSubmit = async (value) => {
    // try {
    //   setError('')
    //   setLoading(true)
    //   await login(value.email, value.password)
    //   history.push('/')
    // } catch (err) {
    //   setLoading(false)
    //   setError(err.message)
    // }
  }

  return (
    <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Heading>Movie App</Heading>
      <br />
      <Heading secondary>Login</Heading>
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

      <SubmitBtn type='submit' disabled={loading}>
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
