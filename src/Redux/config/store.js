import AsyncStorage from '@react-native-async-storage/async-storage';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const composerRelease = __DEV__
  ? composeWithDevTools(applyMiddleware(thunk, logger, promiseMiddleware))
  : applyMiddleware(thunk, promiseMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(composerRelease));

const persistor = persistStore(store);

export {store, persistor};
