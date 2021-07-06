import { themeTypes } from 'redux/actionTypes/themeTypes'
import { darkTheme } from 'theme/theme'

const initialState = {
  theme: darkTheme,
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeTypes.APPLY_THEME:
      return Object.assign({}, { theme: action.payload })
    default:
      return state
  }
}

export default themeReducer
