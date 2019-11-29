//@flow
import * as Types from '~shared/helpers/Types';
import {LIGHT_THEME, DARK_THEME} from '~shared/styles/colors';

import types from './types';
const {TOGGLE_THEME} = types;

const INITIAL_STATE: State = {
  theme: LIGHT_THEME,
  currentTheme: 'light',
};

export default function(state: State = INITIAL_STATE, action: Types.Action): State {
  const {type} = action;

  switch (type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
        theme: state.currentTheme === 'light' ? DARK_THEME : LIGHT_THEME
      }
      
    default:
      return state;
  }
}

type State = {
  currentTheme: string,
  currentTheme: Object,
};
