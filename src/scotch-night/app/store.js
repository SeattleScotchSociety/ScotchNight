import { createStore, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { reducer } from './Reducers';

const store = createStore(reducer, undefined, compose(autoRehydrate()));

persistStore(store, { storage: AsyncStorage }).purge();

export default store;
