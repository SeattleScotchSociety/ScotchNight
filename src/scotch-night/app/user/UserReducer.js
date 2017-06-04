import { USER_LOGGED_IN, USER_LOGGED_OUT } from './UserActionTypes';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case USER_LOGGED_IN: {
            alert(`logged in! ${JSON.stringify(action.payload)}`);
            return action.payload;
        }

        default: {
            return state;
        }
    }
};

export default userReducer;
