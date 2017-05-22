import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { loadBottles } from './LoadBottlesSaga';
import { bottlesLoaded } from '../BottleActions';
import Bottles from '../api/Bottles';

it('loads all the bottles', () => {
    return expectSaga(loadBottles).put(bottlesLoaded(null, Bottles)).run();
});
