import { USER_LOGGED_IN } from './UserActionTypes';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case USER_LOGGED_IN: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};

export default userReducer;
