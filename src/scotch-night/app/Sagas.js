import { all } from 'redux-saga/effects';
import Bottles from './bottles';
let {
    watchLoadBottles,
    watchAddBottle
} = Bottles.Sagas;

import Members from './members';
let { watchLoadMembers } = Members.Sagas;

import Events from './events';
let { watchLoadEvents } = Events.Sagas;

import Reviews from './reviews';
let { watchLoadReviews, watchAddReview } = Reviews.Sagas;

export default function* rootSaga() {
    yield all([
        watchLoadBottles(),
        watchAddBottle(),
        watchLoadMembers(),
        watchLoadEvents(),
        watchLoadReviews(),
        watchAddReview()
    ]);
}
