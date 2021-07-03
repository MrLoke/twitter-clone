import { darkTheme } from 'theme/theme'
const APPLY_THEME = 'APPLY_THEME'
const initialState = {
  theme: darkTheme,
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_THEME:
      return Object.assign({}, { theme: action.payload })
    default:
      return state
  }
}

export default themeReducer
