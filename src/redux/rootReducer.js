import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import authReducer from 'redux/reducers/authReducer'
import themeReducer from 'redux/reducers/themeReducer'

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['search'],
}

const rootReducer = combineReducers({
  user: authReducer,
  theme: themeReducer,
})

export default persistReducer(persistConfig, rootReducer)
