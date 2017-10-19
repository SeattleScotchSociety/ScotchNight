import BottleApi from "./api/BottleApi";
import MemberApi from "./api/MemberApi";
import { IRootStore, RootStore } from "./stores/RootStore";

export const createStore: (history: any) => IRootStore = (history) => {
    return RootStore.create({
        bottleStore: { bottles: [] },
        memberStore: { members: [] },
        navigation: {},
        scotchNightStore: {}
    },
        {
            bottleApi: new BottleApi(),
            memberApi: new MemberApi(),
            history,
            locale: "en-US",
        });
};