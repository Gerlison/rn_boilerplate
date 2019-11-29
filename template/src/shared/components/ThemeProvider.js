// @flow
import React from 'react';
import * as Types from '../helpers/Types';

import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { connect } from "react-redux";

function ThemeProvider(props: Props) {
  return (
    <StyledComponentsProvider theme={{...props.theme, currentTheme: props.currentTheme}}> 
      {React.cloneElement(React.Children.only(props.children))}
    </StyledComponentsProvider>
  );
}

type Props = {
  children: Array<Function>,
  theme: Object,
  currentTheme: string
}

function mapStateToProps(state: Types.State): Object {
  return Object.assign({}, state.theme)
}

export default connect(mapStateToProps)(ThemeProvider);