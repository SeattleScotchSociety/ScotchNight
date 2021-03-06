import { BOTTLES_LOADED, BOTTLE_ADDED, BOTTLE_SELECTED } from './BottleActionTypes';

const BottleReducer = (state = [], action) => {
    switch (action.type) {
        case BOTTLE_ADDED: {
            let all = [...state.all];
            all.push(action.payload);

            return { ...state, all };
        }

        case BOTTLES_LOADED: {
            return { all: action.payload };
        }

        case BOTTLE_SELECTED: {
            let bottleId = action.payload;
            let selected = state.all.filter(bottle => bottle.id === bottleId)[0];

            return { ...state, selected };
        }

        default: {
            return state;
        }
    }
};

export default BottleReducer;
