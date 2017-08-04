import _ from 'lodash';

import {
    REVIEWS_LOADED,
    REVIEW_ADDED
} from './ReviewActionTypes';

const BottleReducer = (state = [], action) => {
    switch (action.type) {
        case REVIEWS_LOADED: {
<<<<<<< HEAD
            return { ...state, summary: action.payload.summaryReview, member: action.payload.memberReview };
=======
            return { ...state, summary: action.payload };
>>>>>>> origin/master
        }

        default: {
            return state;
        }
    }
};

export default BottleReducer;
