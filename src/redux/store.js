import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import rootReducer from 'redux/rootReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger)
// }

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
