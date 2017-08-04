import _ from 'lodash';

import {
    REVIEWS_LOADED,
    REVIEW_ADDED
} from './ReviewActionTypes';

const BottleReducer = (state = [], action) => {
    switch (action.type) {
        case REVIEWS_LOADED: {
            return { ...state, summary: action.payload };
        }

        default: {
            return state;
        }
    }
};

export default BottleReducer;
