import { LOAD_REVIEWS, REVIEWS_LOADED, ADD_REVIEW } from './ReviewActionTypes';

export const loadReviews = () => {
    return {
        type: LOAD_REVIEWS
    };
};

export const reviewsLoaded = reviews => {
    return {
        type: REVIEWS_LOADED,
        payload: reviews
    };
};

export const addReview = review => {
    return {
        type: ADD_REVIEW,
        payload: review
    };
};
