import { takeLatest, call, put } from 'redux-saga/effects';
import { getAllMembers } from '../api/MemberApi';
import { membersLoaded } from '../MemberActions';
import { LOAD_MEMBERS } from '../MemberActionTypes';

export function* loadMembers() {
    try {
        console.log('loading members');
        const members = yield call(getAllMembers);

        yield put(membersLoaded(null, members));
    } catch (error) {
        yield put(membersLoaded(error));
    }
}

export function* watchLoadMembers() {
    yield takeLatest(LOAD_MEMBERS, loadMembers);
}
