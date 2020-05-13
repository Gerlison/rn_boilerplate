import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyledProvider } from 'styled-components';

const ThemeProvider = ({ children }) => {
  const {
    theme: { currentTheme, theme },
  } = useSelector((state) => state);

  return (
    <StyledProvider theme={{ ...theme, currentTheme }}>
      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
