import _ from 'lodash';

import {
    ADD_EVENT,
    EVENTS_LOADED,
    EVENT_UPDATED,
    EVENT_SELECTED
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
            return { all: action.payload };
        }

        case EVENT_UPDATED: {
            let updatedEvent = action.payload;

            let allEvents = _.filter(state.all, event => event.id !== updatedEvent.id);

            if (allEvents) {
                allEvents.push(updatedEvent);
            } else {
                allEvents = [updatedEvent];
            }

            let newState = { ...state, all: allEvents };

            if (state.selected.id === updatedEvent.id) {
                newState.selected = updatedEvent;
            }

            return newState;
        }

        case EVENT_SELECTED: {
            let eventId = action.payload;
            let selectedEvent = _.find(state.all, event => event.id === eventId);

            return { ...state, selected: selectedEvent };
        }

        default: {
            return state;
        }
    }
};

export default EventReducer;
