import BottleApi from "./api/BottleApi";
import EventApi from "./api/EventApi";
import LocationApi from "./api/LocationApi";
import MemberApi from "./api/MemberApi";
import NoteApi from "./api/NoteApi";
import Auth from "./services/Auth";
import { IRootStore, RootStore } from "./stores/RootStore";

export const createStore: (history: any, auth: Auth) => IRootStore = (history, auth) => {
    return RootStore.create({
        bottleStore: { bottles: [] },
        eventStore: { events: [] },
        locationStore: { locations: [] },
        memberStore: { members: [] },
        navigation: {},
        scotchNightStore: {}
    },
        {
            bottleApi: new BottleApi(auth),
            eventApi: new EventApi(auth),
            history,
            locale: "en-US",
            locationApi: new LocationApi(auth),
            memberApi: new MemberApi(auth),
            noteApi: new NoteApi(auth)
        });
};