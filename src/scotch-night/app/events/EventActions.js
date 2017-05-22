import { LOAD_EVENTS, EVENTS_LOADED, ADD_EVENT } from './EventActionTypes';

export const loadEvents = () => {
    return {
        type: LOAD_EVENTS
    };
};

export const eventsLoaded = (error, events) => {
    const isError = !!error;

    const payload = isError ? error : events;

    return {
        type: EVENTS_LOADED,
        payload,
        error: isError
    };
};

export const addEvent = event => {
    return {
        type: ADD_EVENT,
        payload: event
    };
};
