import { takeLatest, call, put } from 'redux-saga/effects';
import { updateEvent } from '../api/EventsApi';
import { eventUpdated } from '../EventActions';
import { UPDATE_EVENT } from '../EventActionTypes';

export function* updateExistingEvent(event) {
    try {
        yield call(updateEvent, event);

        yield put(eventUpdated(null, event));
    } catch (error) {
        yield put(eventUpdated(error));
    }
}

export function* watchUpdateEvent() {
    yield takeLatest(UPDATE_EVENT, updateExistingEvent);
}
