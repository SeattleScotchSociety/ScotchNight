import { UPDATE_USER, USER_UPDATED } from './UserActionTypes';

export const updateUser = () => {
    return {
        type: UPDATE_USER
    };
};

export const userUpdated = user => {
    return {
        type: USER_UPDATED,
        payload: user
    };
};
