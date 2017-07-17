import { LOAD_MEMBERS, MEMBERS_LOADED, SET_MEMBER } from './MemberActionTypes';

export const loadMembers = () => {
    return {
        type: LOAD_MEMBERS
    };
};

export const setMember = (member) => {
    return {
        type: SET_MEMBER,
        payload: member
    };
}

export const membersLoaded = (error, members) => {
    const isError = !!error;

    const payload = isError ? error : members;

    return {
        type: MEMBERS_LOADED,
        payload,
        error: isError
    };
};
