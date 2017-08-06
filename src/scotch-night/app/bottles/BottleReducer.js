import _ from 'lodash';

import {
    BOTTLES_LOADED,
    BOTTLE_ADDED,
    BOTTLE_SELECTED
} from './BottleActionTypes';

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
            let selected = _.find(state.all, bottle => bottle.id === bottleId);

            return { ...state, selected };
        }

        default: {
            return state;
        }
    }
};

export default BottleReducer;
