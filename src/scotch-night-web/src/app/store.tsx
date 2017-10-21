import BottleApi from "./api/BottleApi";
import EventApi from "./api/EventApi";
import LocationApi from "./api/LocationApi";
import MemberApi from "./api/MemberApi";
import { IRootStore, RootStore } from "./stores/RootStore";

export const createStore: (history: any) => IRootStore = (history) => {
    return RootStore.create({
        bottleStore: { bottles: [] },
        eventStore: { events: [] },
        locationStore: { locations: [] },
        memberStore: { members: [] },
        navigation: {},
        scotchNightStore: {}
    },
        {
            bottleApi: new BottleApi(),
            eventApi: new EventApi(),
            history,
            locale: "en-US",
            locationApi: new LocationApi(),
            memberApi: new MemberApi()
        });
};