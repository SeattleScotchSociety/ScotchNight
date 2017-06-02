import { USER_LOGGED_IN, USER_LOGGED_OUT } from './UserActionTypes';

export const userLoggedIn = (token, username, name) => {
    return {
        type: USER_LOGGED_IN,
        payload: {
            token,
            username,
            name
        }
    };
};

export const userLoggedOut = () => {
    return {
        type: USER_LOGGED_OUT
    };
};
