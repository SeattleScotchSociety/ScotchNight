import { USER_LOGGED_IN, USER_LOGGED_OUT, CURRENT_USER_UPDATED } from './UserActionTypes';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case USER_LOGGED_IN: {
            return action.payload;
        }

        case CURRENT_USER_UPDATED: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};

export default userReducer;
