import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import authReducer from 'redux/reducers/authReducer'
import modalReducer from 'redux/reducers/modalReducer'
import themeReducer from 'redux/reducers/themeReducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['modal'],
}

const rootReducer = combineReducers({
  user: authReducer,
  modal: modalReducer,
  theme: themeReducer,
  // fetch user for search bar and recommends
})

export default persistReducer(persistConfig, rootReducer)
