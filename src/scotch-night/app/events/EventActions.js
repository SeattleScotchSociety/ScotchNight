import {
    LOAD_EVENTS,
    EVENTS_LOADED,
    ADD_EVENT,
    UPDATE_EVENT,
    EVENT_UPDATED,
    EVENT_SELECTED
} from './EventActionTypes';

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

export const updateEvent = event => {
    return {
        type: UPDATE_EVENT,
        payload: event
    };
};

export const eventUpdated = (error, event) => {
    const isError = !!error;

    const payload = isError ? error : event;

    return {
        type: EVENT_UPDATED,
        payload,
        error: isError
    };
};

export const eventSelected = eventId => {
    return {
        type: EVENT_SELECTED,
        payload: eventId
    };
};