import * as _ from "lodash";
import { observable } from "mobx";
import { getEnv, getParent, process, types } from "mobx-state-tree";

import { IMember, Member } from "./MemberStore";

import { Location } from "../types/mobxCommon";

export const ScotchNightStore = types
    .model("ScotchNightStore", {
        currentUser: types.maybe(types.reference(Member))
    })
    .actions((self) => {
        const setCurrentUser = (member: IMember) => {
            self.currentUser = member;
        };

        return {
            setCurrentUser
        };
    });

export type IScotchNightStore = typeof ScotchNightStore.Type;
export default ScotchNightStore;