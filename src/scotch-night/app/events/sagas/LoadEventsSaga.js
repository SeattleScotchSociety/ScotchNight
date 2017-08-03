import { takeLatest, call, put } from 'redux-saga/effects';
import { getAllEvents } from '../api/EventsApi';
import { eventsLoaded } from '../EventActions';
import { LOAD_EVENTS } from '../EventActionTypes';

export function* loadEvents() {
    try {
        const events = yield call(getAllEvents);

        yield put(eventsLoaded(null, events));
    } catch (error) {
        yield put(eventsLoaded(error));
    }
}

export function* watchLoadEvents() {
    yield takeLatest(LOAD_EVENTS, loadEvents);
}
