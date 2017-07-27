import { ADD_EVENT, EVENTS_LOADED } from './EventActionTypes';

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

        default: {
            return state;
        }
    }
};

export default EventReducer;
