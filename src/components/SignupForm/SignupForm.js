import { useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import {
  Form,
  Heading,
  Input,
  SubmitBtn,
  ErrorMessage,
  LinkTo,
} from './SignupFormStyled'

const SignupForm = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const history = useHistory()

  const onSubmit = async (value) => {
    // try {
    //   setError('')
    //   setLoading(true)
    //   await signup(value.username, value.email, value.password)
    //   history.push('/')
    // } catch {
    //   setLoading(false)
    //   setError('Failed to create an account')
    // }
  }

  return (
    <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Heading>Movie App</Heading>
      <br />
      <Heading secondary>Sign Up</Heading>
      <Input
        type='text'
        id='username'
        name='username'
        placeholder='Username'
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
      <SubmitBtn type='submit' disabled={loading}>
        {loading ? <LoadingSpinner smallSpinner /> : <p>Create account</p>}
      </SubmitBtn>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <LinkTo>
        Already have account?&nbsp;<Link to='/login'>Login</Link>
      </LinkTo>
    </Form>
  )
}

export default SignupForm
