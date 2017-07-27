import { takeLatest, call, put } from 'redux-saga/effects';
import { getAllBottles } from '../api/BottlesApi';
import { bottlesLoaded } from '../BottleActions';
import { LOAD_BOTTLES } from '../BottleActionTypes';

export function* loadBottles() {
    try {
        console.log('loading bottles');
        const bottles = yield call(getAllBottles);
        console.log('putting bottles');
        yield put(bottlesLoaded(null, bottles));
    } catch (error) {
        yield put(bottlesLoaded(error));
    }
}

export function* watchLoadBottles() {
    yield takeLatest(LOAD_BOTTLES, loadBottles);
}
