import * as _ from "lodash";
import { observable } from "mobx";
import { getEnv, getParent, process, types } from "mobx-state-tree";

import { Member } from "./MemberStore";

import { Location } from "../types/mobxCommon";

export const ScotchNightStore = types
    .model("ScotchNightStore", {
        currentUser: types.maybe(types.reference(Member))
    })
    .actions((self) => {
        return {
        };
    });

export type IScotchNightStore = typeof ScotchNightStore.Type;
export default ScotchNightStore;