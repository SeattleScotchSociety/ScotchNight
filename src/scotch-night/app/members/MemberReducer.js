import _ from 'lodash';
import { MEMBERS_LOADED, MEMBER_SELECTED } from './MemberActionTypes';

const membersReducer = (state = { all: [], selected: {} }, action) => {
    switch (action.type) {
        case MEMBERS_LOADED: {
            let selected = action.payload[0];

            return { all: action.payload, selected };
        }

        case MEMBER_SELECTED: {
            let memberId = action.payload;
<<<<<<< HEAD
            let newMember = _.find(state.all, { 'id': memberId });

            let newState = { ...state, selected: newMember };

            return newState;
=======
            let selected = _.find(state.all, member => member.id === memberId);

            return { ...state, selected };
>>>>>>> origin/master
        }

        default: {
            return state;
        }
    }
};

export default membersReducer;
