import { MEMBERS_LOADED, MEMBER_SELECTED } from './MemberActionTypes';

const membersReducer = (state = { all: [], selected: {} }, action) => {
    switch (action.type) {
        case MEMBERS_LOADED: {
            let selected = action.payload[0];

            return { all: action.payload, selected };
        }

        case MEMBER_SELECTED: {
            let memberId = action.payload;
            let newMember = state.all.filter(m => m.id === memberId)[0];

            let newState = { ...state, selected: newMember };

            return newState;
        }

        default: {
            return state;
        }
    }
};

export default membersReducer;
