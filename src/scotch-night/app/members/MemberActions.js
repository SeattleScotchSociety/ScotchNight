import { LOAD_MEMBERS, MEMBERS_LOADED, MEMBER_SELECTED } from './MemberActionTypes';

export const loadMembers = () => {
    return {
        type: LOAD_MEMBERS
    };
};

export const membersLoaded = (error, members) => {
    const isError = !!error;

    const payload = isError ? error : members;

    return {
        type: MEMBERS_LOADED,
        payload,
        error: isError
    };
};

export const memberSelected = (member) => {
    return {
        type: MEMBER_SELECTED,
        payload: member
    };
};