import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import rootReducer from 'redux/rootReducer'

// const middlewares = [thunk]

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger)
// }

export const store = createStore(
  rootReducer,
  // applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)

export default { store, persistor }
