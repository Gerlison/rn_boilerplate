//@flow
import * as Types from '~shared/helpers/Types';
import types from './types';
const {TOGGLE_THEME} = types;

export function toggleTheme(): Types.Action {
  return {
    type: TOGGLE_THEME,
  };
}
