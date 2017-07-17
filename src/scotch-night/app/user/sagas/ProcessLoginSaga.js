import { takeLatest, call, put } from 'redux-saga/effects';
import { createMember } from '../../members/api/MemberApi';
import { USER_LOGGED_IN } from '../UserActionTypes';

export function* processLogin(action) {
    const { username } = action.payload;

    try {
        const members = yield call(createMember);

        yield put(membersLoaded(null, members));
    } catch (error) {
        yield put(membersLoaded(error));
    }
}

export function* watchUserLoggedIn() {
    yield takeLatest(USER_LOGGED_IN, processLogin);
}
