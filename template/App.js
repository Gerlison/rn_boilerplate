import * as React from 'react';
import { Provider } from 'react-redux';

import Router from '@navigation';

import ErrorBoundary from '@core/ErrorBoundary';
import ThemeProvider from '@core/ThemeProvider';

import store from '@store';

export default () => (
  <Provider store={store}>
    <ThemeProvider>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>
);
