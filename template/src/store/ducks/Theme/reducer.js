import { LIGHT_THEME, DARK_THEME } from '@styles/colors';
import Types from './types';

const INITIAL_STATE = {
  theme: LIGHT_THEME,
  currentTheme: 'light',
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case Types.TOGGLE_THEME:
      return {
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
        theme: state.currentTheme === 'light' ? DARK_THEME : LIGHT_THEME,
      };

    default:
      return state;
  }
};
