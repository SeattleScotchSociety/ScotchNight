import { USER_LOGGED_IN, USER_LOGGED_OUT, CURRENT_USER_UPDATED } from './UserActionTypes';

export const userLoggedIn = (token, email, firstName, lastName) => {
    return {
        type: USER_LOGGED_IN,
        payload: {
            token,
            email,
            firstName,
            lastName
        }
    };
};

export const userLoggedOut = () => {
    return {
        type: USER_LOGGED_OUT
    };
};

export const currentUserUpdated = (user) => {
    return {
        type: CURRENT_USER_UPDATED,
        payload: user
    };
};
