import { lazy, Suspense } from 'react'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import Layout from 'layout/Layout'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

const FeedPage = lazy(() => import('pages/FeedPage/FeedPage'))
const UserProfilePage = lazy(() =>
  import('pages/UserProfilePage/UserProfilePage')
)
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))

const Routes = () => {
  const isLogged = useSelector((state) => state.auth.isLogged)

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              isLogged ? (
                <Layout>
                  <FeedPage />
                </Layout>
              ) : (
                <Redirect to='/login' />
              )
            }
          />
          <Route
            exact
            path='/login'
            render={() => (isLogged ? <Redirect to='/' /> : <LoginPage />)}
          />
          <Route
            exact
            path='/signup'
            render={() => (isLogged ? <Redirect to='/' /> : <RegisterPage />)}
          />
          <Route
            exact
            path='/profile/:name'
            render={() => (
              <Layout>
                <UserProfilePage />
              </Layout>
            )}
          />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
