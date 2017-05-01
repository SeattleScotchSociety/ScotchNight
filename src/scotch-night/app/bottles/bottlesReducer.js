import { ADD_BOTTLE } from './bottlesActionTypes';

const bottlesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_BOTTLE: {
            return [action.payload, ...state];
        }

        default: {
            return state;
        }
    }
};

export default bottlesReducer;
