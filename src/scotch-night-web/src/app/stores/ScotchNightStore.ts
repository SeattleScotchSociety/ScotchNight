import * as _ from "lodash";
import { observable } from "mobx";
import { getEnv, getParent, process, types } from "mobx-state-tree";

import MemberApi from "../api/MemberApi";
import { IMember, Member } from "./MemberStore";

import { Location } from "../types/mobxCommon";

export const ScotchNightStore = types
    .model("ScotchNightStore", {
        currentUser: types.maybe(Member)
    })
    .actions((self) => {
        const setCurrentUser = (member: IMember) => {
            self.currentUser = member;
        };

        const setCurrentUserByEmail = process(function* setUser(email: string) {
            const { memberApi }: { memberApi: MemberApi } = getEnv(self);

            if (!email || email === "") {
                return null;
            }

            const member: IMember = yield memberApi.getByEmail(email);

            setCurrentUser(member);

            return member;
        });

        return {
            setCurrentUser,
            setCurrentUserByEmail
        };
    });

export type IScotchNightStore = typeof ScotchNightStore.Type;
export default ScotchNightStore;