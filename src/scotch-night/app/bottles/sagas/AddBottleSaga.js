import { takeLatest, call, put } from 'redux-saga/effects';
import { addBottle } from '../api/BottlesApi';
import { bottleAdded } from '../BottleActions';
import { ADD_BOTTLE } from '../BottleActionTypes';
import Events from '../../events';
let {
    updateExistingEvent
} = Events.Sagas;

export function* addNewBottle(action) {
    try {
        const { bottle, event } = action.payload;

        const id = yield call(addBottle, bottle);

        const newBottle = { ...bottle, id };

        yield put(bottleAdded(null, newBottle));

        if (!event) {
            return;
        }

        let updatedEvent = { ...event };

        if (updatedEvent.bottles) {
            updatedEvent.bottles.push(newBottle.id);
        } else {
            updatedEvent.bottles = [newBottle.id];
        }

        yield* updateExistingEvent(updatedEvent);
    } catch (error) {
        console.log(error);
        //yield put(bottleAdded(error));
    }
}

export function* watchAddBottle() {
    yield takeLatest(ADD_BOTTLE, addNewBottle);
}
