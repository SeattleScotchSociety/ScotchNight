import { takeLatest, call, put } from 'redux-saga/effects';
import { addBottle } from '../api/BottlesApi';
import { bottleAdded } from '../BottleActions';
import { ADD_BOTTLE } from '../BottleActionTypes';

export function* addNewBottle(action) {
    try {
        const bottle = action.payload;

        const result = yield call(addBottle, bottle);

        console.log('bottle added result');
        console.log(result);

        yield put(bottleAdded(null, bottle));
    } catch (error) {
        yield put(bottleAdded(error));
    }
}

export function* watchAddBottle() {
    yield takeLatest(ADD_BOTTLE, addNewBottle);
}
