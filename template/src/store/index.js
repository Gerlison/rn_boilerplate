import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import GlobalDucks from './ducks';

const middlewares = applyMiddleware(thunk);
const reducers = combineReducers({ ...GlobalDucks });

export default createStore(reducers, middlewares);
