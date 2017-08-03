import { takeLatest, call, put } from 'redux-saga/effects';
import { getReviews } from '../api/ReviewsApi';
import { reviewsLoaded } from '../ReviewActions';
import { LOAD_REVIEWS } from '../ReviewActionTypes';

export function* reviews(action) {
    try {
        const reviews = yield call(getReviews, action.payload.bottleId);

        yield put(reviewsLoaded(null, reviews));
    } catch (error) {
        yield put(reviewsLoaded(error));
    }
}

export function* watchLoadReviews() {
    yield takeLatest(LOAD_REVIEWS, reviews);
}
