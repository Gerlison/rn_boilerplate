import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { sizing } from '@styles/fonts';
import Text from '@core/Text';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <>
          <SafeAreaView />
          <StyledStatusBar />
          <StyledScrollView>
            <Text size="LARGER" color="DANGER">
              Algo de errado não está certo!
            </Text>
            <Text>{error?.toString()}</Text>
          </StyledScrollView>
        </>
      );
    }

    return (
      <>
        <StyledStatusBar />
        {children}
      </>
    );
  }
}

const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: sizing.MEDIUM,
  },
}))``;

const StyledStatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.BACKGROUND,
  barStyle: 'dark-content',
}))``;

export default ErrorBoundary;
