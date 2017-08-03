import { LOAD_REVIEWS, REVIEWS_LOADED, ADD_REVIEW } from './ReviewActionTypes';

export const loadReviews = (bottleId) => {
    return {
        type: LOAD_REVIEWS,
        payload: { bottleId }
    };
};

export const reviewsLoaded = (error, reviews) => {
    const isError = !!error;

    const payload = isError ? error : reviews;

    return {
        type: REVIEWS_LOADED,
        payload,
        error: isError
    };
};

export const addReview = review => {
    return {
        type: ADD_REVIEW,
        payload: review
    };
};
