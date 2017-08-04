import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getReviews, getMemberReview } from '../api/ReviewsApi';
import { reviewsLoaded } from '../ReviewActions';
import { LOAD_REVIEWS } from '../ReviewActionTypes';
import { getCurrentMember } from '../../members/MemberSelectors';

export function* loadBottleReviews(action) {
    try {
        let currentMember = yield select(getCurrentMember);
        const summaryReview = yield call(getReviews, action.payload.bottleId);
        const memberReview = yield call(getMemberReview, currentMember.id);

        yield put(reviewsLoaded(null, summaryReview, memberReview));
    } catch (error) {
        yield put(reviewsLoaded(error));
    }
}

export function* watchLoadReviews() {
    yield takeLatest(LOAD_REVIEWS, loadBottleReviews);
}
