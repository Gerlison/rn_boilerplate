import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reactotron from '@services/reactotron';

import sharedSlices from './slices';
import sharedSagas from './sagas';

const reducer = combineReducers({ ...sharedSlices });

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer,
  middleware: [sagaMiddleware],
  enhancers: __DEV__ ? [reactotron.createEnhancer()] : undefined,
});

sagaMiddleware.run(sharedSagas);
