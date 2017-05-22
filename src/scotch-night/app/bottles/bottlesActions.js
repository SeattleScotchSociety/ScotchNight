import { LOAD_BOTTLES, BOTTLES_LOADED, ADD_BOTTLE } from './BottlesActionTypes';

export const loadBottles = () => {
    return {
        type: LOAD_BOTTLES
    };
};

export const bottlesLoaded = (error, bottles) => {
    const isError = !!error;

    const payload = isError ? error : bottles;

    return {
        type: BOTTLES_LOADED,
        payload,
        error: isError
    };
};

export const addBottle = bottle => {
    return {
        type: ADD_BOTTLE,
        payload: bottle
    };
};
