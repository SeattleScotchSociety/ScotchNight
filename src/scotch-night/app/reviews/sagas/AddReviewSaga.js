import { takeLatest, call, put, select } from 'redux-saga/effects';
import { addReview } from '../api/ReviewsApi';
import { reviewAdded } from '../ReviewActions';
import { ADD_REVIEW } from '../ReviewActionTypes';
import { loadBottleReviews } from './LoadReviewsSaga';
import { getCurrentMember } from '../../members/MemberSelectors';
import { getCurrentBottle } from '../../bottles/BottleSelectors';

export function* addNewReview(action) {
    try {
        const review = action.payload;
        let currentMember = yield select(getCurrentMember);
        let currentBottle = yield select(getCurrentBottle);

        review.memberId = currentMember.id;
        review.bottleId = currentBottle.id;

        const id = yield call(addReview, review);

        yield put(reviewAdded(null, review));

        yield call(loadBottleReviews, review.bottleId);
    } catch (error) {
        console.log(error);
        yield put(reviewAdded(error));
    }
}

export function* watchAddReview() {
    yield takeLatest(ADD_REVIEW, addNewReview);
}
