import { themeTypes } from 'redux/actionTypes/themeTypes'

export const applyTheme = (theme) => {
  return {
    type: themeTypes.APPLY_THEME,
    payload: theme,
  }
}
