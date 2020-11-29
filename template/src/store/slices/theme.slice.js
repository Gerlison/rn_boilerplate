import { createSlice } from '@reduxjs/toolkit';
import { LIGHT_THEME, DARK_THEME } from '@styles/colors';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: LIGHT_THEME,
    currentTheme: 'light',
  },
  reducers: {
    toggleTheme: (state) => ({
      currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
      theme: state.currentTheme === 'light' ? DARK_THEME : LIGHT_THEME,
    }),
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
