import { lazy, Suspense } from 'react'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const FeedPage = lazy(() => import('pages/FeedPage/FeedPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Switch>
          <Route exact path='/' component={FeedPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={RegisterPage} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
