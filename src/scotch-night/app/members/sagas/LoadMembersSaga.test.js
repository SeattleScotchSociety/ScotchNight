import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { loadMembers } from './LoadMembersSaga';
import { membersLoaded } from '../MemberActions';
import Members from '../api/Members';

it('loads all the members', () => {
    return expectSaga(loadMembers).put(membersLoaded(null, Members)).run();
});
