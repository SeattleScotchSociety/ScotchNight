import { LOAD_REVIEWS, REVIEWS_LOADED, ADD_REVIEW, REVIEW_ADDED } from './ReviewActionTypes';

export const loadReviews = (bottleId) => {
    return {
        type: LOAD_REVIEWS,
        payload: { bottleId }
    };
};

<<<<<<< HEAD
export const reviewsLoaded = (error, summaryReview, memberReview) => {
    const isError = !!error;

    const payload = isError ? error : { summaryReview, memberReview };
=======
export const reviewsLoaded = (error, reviews) => {
    const isError = !!error;

    const payload = isError ? error : reviews;
>>>>>>> origin/master

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

export const reviewAdded = (error, review) => {
    const isError = !!error;

    const payload = isError ? error : review;

    return {
        type: REVIEW_ADDED,
        payload,
        error: isError
    };
};
