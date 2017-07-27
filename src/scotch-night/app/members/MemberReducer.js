import { MEMBERS_LOADED, SET_MEMBER } from './MemberActionTypes';

const membersReducer = (state = [], action) => {
    switch (action.type) {
        case MEMBERS_LOADED: {
            let newState = Object.assign({}, state);
            newState.members = action.payload;

            return newState;
        }

        case SET_MEMBER: {
            let newState = Object.assign({}, state);
            newState.current = action.payload;
            
            return newState;
        }

        default: {
            return state;
        }
    }
};

export default membersReducer;
