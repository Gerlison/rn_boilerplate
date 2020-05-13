import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '@services/reactotron';

import GlobalDucks from './ducks';

const reducers = combineReducers({ ...GlobalDucks });

const middlewares = compose(
  applyMiddleware(thunk),
  __DEV__ ? Reactotron.createEnhancer() : () => {},
);

export default createStore(reducers, middlewares);
