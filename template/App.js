//@flow
import * as React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import createStore from '~/store';
const {store, persistor} = createStore();

import Router from './src/navigation/layout';
import ErrorBoundary from '~shared/components/ErrorBoundary';
import ThemeProvider from '~shared/components/ThemeProvider';

import Splash from '~shared/components/Splash';

export default function(): React.Element<any> {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {bootstrapped => (
          <Splash bootstrapped={bootstrapped}>
            <ThemeProvider>
              <ErrorBoundary>
                <Router />
              </ErrorBoundary>
            </ThemeProvider>
          </Splash>
        )}
      </PersistGate>
    </Provider>
  );
}
