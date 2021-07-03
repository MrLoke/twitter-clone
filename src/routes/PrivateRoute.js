import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authUser = useSelector((state) => state.authUser.currentUser)

  return (
    <Route
      {...rest}
      render={(props) => {
        return authUser ? <Component {...props} /> : <Redirect to='/login' />
      }}></Route>
  )
}

export default PrivateRoute
