import LoginForm from 'components/LoginForm/LoginForm'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { Wrapper } from './LoginPageStyled'

const LoginPage = () => {
  const authUser = useSelector((state) => state.authUser.currentUser)

  return <Wrapper>{!authUser ? <LoginForm /> : <Redirect to='/' />}</Wrapper>
}

export default LoginPage
