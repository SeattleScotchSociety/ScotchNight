import eventsReducer from './EventReducer';
import { EVENTS_LOADED, ADD_EVENT } from './EventActionTypes';

test('ADD_EVENT should add new event', () => {
    test('should return correct action', () => {
        const state = {
            events: []
        };

        const action = {
            type: ADD_EVENT,
            event: {}
        };

        let newState = eventsReducer(state, action);

        expect(newState.events.length).toBe(1);
    });
});
