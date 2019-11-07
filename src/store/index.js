import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import Auth from './ducks';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
}

const middlewares = applyMiddleware(thunk);

const reducers = combineReducers(Object.assign({},
  Auth,
));

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer, middlewares);
  let persistor = persistStore(store);
  return { store, persistor };
}
