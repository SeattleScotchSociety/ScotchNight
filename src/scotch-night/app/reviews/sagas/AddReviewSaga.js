import { takeLatest, call, put } from 'redux-saga/effects';
import { addReview } from '../api/ReviewsApi';
import { reviewAdded } from '../ReviewActions';
import { ADD_REVIEW } from '../ReviewActionTypes';
import Events from '../../events';
let {
    updateExistingEvent
} = Events.Sagas;

export function* addNewReview(action) {
    try {
        const review = action.payload;

        const id = yield call(addReview, review);

        reviewAdded(review);
    } catch (error) {
        console.log(error);
        yield put(bottleAdded(error));
    }
}

export function* watchAddReview() {
    yield takeLatest(ADD_REVIEW, addNewReview());
}
