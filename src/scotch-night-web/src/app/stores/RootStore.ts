import { types } from "mobx-state-tree";
import BottleStore from "./BottleStore";
import EventStore from "./EventStore";
import MemberStore from "./MemberStore";
import { RouterStore } from "./RouterStore";
import ScotchNightStore from "./ScotchNightStore";

export const RootStore = types.model("RootStore", {
    bottleStore: types.optional(BottleStore, {}),
    eventStore: types.optional(EventStore, {}),
    memberStore: types.optional(MemberStore, {}),
    navigation: types.optional(RouterStore, {}),
    scotchNightStore: types.optional(ScotchNightStore, {})
});

export type IRootStore = typeof RootStore.Type;

export default RootStore;
