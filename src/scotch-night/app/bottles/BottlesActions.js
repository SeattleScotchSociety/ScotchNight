import { ADD_BOTTLE } from './bottlesActionTypes';

export const addBottle = bottle => {
    return {
        type: ADD_BOTTLE,
        payload: bottle
    };
};
