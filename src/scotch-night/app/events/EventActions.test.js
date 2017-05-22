import * as EventActions from './EventActions';
import { LOAD_EVENTS, EVENTS_LOADED, ADD_EVENT } from './EventActionTypes';

test('loadEvent', () => {
    test('should return correct action', () => {
        const action = EventActions.loadEvent();

        expect(action.type).toBe(LOAD_EVENTS);
    });
});

test('bottlesLoaded', () => {
    test('should return correct action', () => {
        const action = EventActions.bottlesLoaded();

        expect(action.type).toBe(EVENTS_LOADED);
    });
});

test('addEvent', () => {
    test('should return correct action', () => {
        const action = EventActions.addEvent();

        expect(action.type).toBe(ADD_EVENT);
    });
});
