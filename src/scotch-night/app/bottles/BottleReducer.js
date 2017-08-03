import {
    ADD_BOTTLE,
    BOTTLES_LOADED,
    BOTTLE_ADDED
} from './BottleActionTypes';

const BottleReducer = (state = [], action) => {
    switch (action.type) {
        case BOTTLE_ADDED: {
            let bottles = [action.payload, ...state];

            return bottles;
        }

        case BOTTLES_LOADED: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};

export default BottleReducer;
