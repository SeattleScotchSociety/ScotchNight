import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { reducer } from './Reducers';
import rootSaga from './Sagas';
import Bottles from './bottles';
let { loadBottles } = Bottles.Actions;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    undefined,
    compose(applyMiddleware(sagaMiddleware), autoRehydrate())
);

sagaMiddleware.run(rootSaga);

persistStore(store, { storage: AsyncStorage }, () => {
    store.dispatch(loadBottles());
}).purge();

export default store;
