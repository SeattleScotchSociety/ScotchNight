import { USER_LOGGED_IN, USER_LOGGED_OUT } from './UserActionTypes';

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
