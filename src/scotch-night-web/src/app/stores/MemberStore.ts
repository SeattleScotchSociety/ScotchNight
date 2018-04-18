import { observable } from 'mobx';
import { flow, getEnv, getParent, types } from 'mobx-state-tree';

import MemberApi from '../api/MemberApi';

import { Location } from '../types/mobxCommon';

export const Member = types.model('Member', {
    id: types.identifier(),
    firstName: types.string,
    lastName: types.string,
    email: types.string
});

export const MemberStore = types
    .model('MemberStore', {
        members: types.optional(types.array(Member), []),
        isLoading: true
    })
    .actions(self => {
        function markLoading(loading: boolean) {
            self.isLoading = loading;
        }

        const loadMembers = flow(function* loadAllMembers() {
            const { memberApi }: { memberApi: MemberApi } = getEnv(self);

            self.members = yield memberApi.getAll();
            markLoading(false);
        });

        return {
            loadMembers
        };
    });

export type IMember = typeof Member.Type;
export type IMemberStore = typeof MemberStore.Type;
export default MemberStore;
