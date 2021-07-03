import SignupForm from 'components/SignupForm/SignupForm'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { Wrapper } from './RegisterPageStyled'

const RegisterPage = () => {
  const authUser = useSelector((state) => state.authUser.currentUser)

  return <Wrapper>{!authUser ? <SignupForm /> : <Redirect to='/' />}</Wrapper>
}

export default RegisterPage
