import { all } from 'redux-saga/effects';
import Bottles from './bottles';
let { watchLoadBottles } = Bottles.Sagas;

export default function* rootSaga() {
    yield all([watchLoadBottles()]);
}
