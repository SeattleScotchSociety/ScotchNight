import { ADD_BOTTLE, BOTTLES_LOADED } from './BottleActionTypes';

const BottleReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_BOTTLE: {
            let id = 1;
            if (state.length > 0) {
                const ids = state.map(bottle => bottle.id);
                id = Math.max(ids) + 1;
            }

            let newBottle = { ...action.payload, id };
            let bottles = [newBottle, ...state];

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
