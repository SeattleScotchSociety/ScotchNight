import _ from 'lodash';
import { MEMBERS_LOADED, MEMBER_SELECTED } from './MemberActionTypes';

const membersReducer = (state = [], action) => {
    switch (action.type) {
        case MEMBERS_LOADED: {
            let selected = action.payload[0];

            return { all: action.payload, selected };
        }

        case MEMBER_SELECTED: {
            let memberId = action.payload;
            let selected = _.find(state.all, member => member.id === memberId);

            return { ...state, selected };
        }

        default: {
            return state;
        }
    }
};

export default membersReducer;
