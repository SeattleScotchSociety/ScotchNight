import { MEMBERS_LOADED } from './MemberActionTypes';

const membersReducer = (state = [], action) => {
    switch (action.type) {
        case MEMBERS_LOADED: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};

export default membersReducer;
