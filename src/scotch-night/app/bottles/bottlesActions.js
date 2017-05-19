import { LOAD_BOTTLES, BOTTLES_LOADED, ADD_BOTTLE } from './BottlesActionTypes';

export const loadBottles = () => {
    return {
        type: LOAD_BOTTLES
    };
};

export const bottlesLoaded = bottle => {
    return {
        type: BOTTLES_LOADED,
        payload: bottle
    };
};

export const addBottle = bottle => {
    return {
        type: ADD_BOTTLE,
        payload: bottle
    };
};
