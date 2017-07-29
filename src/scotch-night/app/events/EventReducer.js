import _ from 'lodash';

import {
    ADD_EVENT,
    EVENTS_LOADED,
    EVENT_UPDATED
} from './EventActionTypes';

const EventReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT: {
            let id = 1;
            if (state.length > 0) {
                const ids = state.map(event => event.id);
                id = Math.max(ids) + 1;
            }

            let newEvent = { ...action.payload, id };
            let events = [newEvent, ...state];

            return events;
        }

        case EVENTS_LOADED: {
            return action.payload;
        }

        case EVENT_UPDATED: {
            let updatedEvent = action.payload;

            let newState = _.filter(state, event => event.id !== updatedEvent.id);

            if (newState) {
                newState.push(updatedEvent);
            } else {
                newState = [updatedEvent];
            }

            return newState;
        }

        default: {
            return state;
        }
    }
};

export default EventReducer;
