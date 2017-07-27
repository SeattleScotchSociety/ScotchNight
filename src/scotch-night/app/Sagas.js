import { all } from 'redux-saga/effects';
import Bottles from './bottles';
let { watchLoadBottles } = Bottles.Sagas;
import Members from './members';
let { watchLoadMembers } = Members.Sagas;
import Events from './events';
let { watchLoadEvents } = Events.Sagas;

export default function* rootSaga() {
    yield all([watchLoadBottles(), watchLoadMembers(), watchLoadEvents()]);
}
