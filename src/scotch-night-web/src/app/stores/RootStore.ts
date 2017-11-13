import * as storage from "localforage";
import { getEnv, types } from "mobx-state-tree";

import { getDependencyViews } from "./dependencyViews";

import BottleStore from "./BottleStore";
import EventStore from "./EventStore";
import LocationStore from "./LocationStore";
import MemberStore from "./MemberStore";
import { RouterStore } from "./RouterStore";
import ScotchNightStore from "./ScotchNightStore";

export const RootStore = types
    .model("RootStore", {
        hydrated: false,
        bottleStore: types.optional(BottleStore, {}),
        eventStore: types.optional(EventStore, {}),
        locationStore: types.optional(LocationStore, {}),
        memberStore: types.optional(MemberStore, {}),
        navigation: types.optional(RouterStore, {}),
        scotchNightStore: types.optional(ScotchNightStore, {})
    })
    .views((self) => getDependencyViews(self))
    .actions((self) => {
        function afterHydration() {
            self.hydrated = true;

            const auth = getEnv(self).auth;

            auth.getProfile(initializeUserCallback);
        }

        function clear() {
            self.scotchNightStore.clear();
        }

        const initializeUserCallback = async (err, profile) => {
            const { bottleStore, eventStore, locationStore, scotchNightStore } = self;

            if (err) {
                storage.removeItem("scotchnight-state");
                return;
            }

            if (!profile.email) {
                return;
            }

            await bottleStore.loadBottles();
            await locationStore.loadLocations();
            const member = await scotchNightStore.setCurrentUserByEmail(profile.email);
            eventStore.loadEventsForMember(member);
        };

        return {
            afterHydration,
            clear
        };
    });

export type IRootStore = typeof RootStore.Type;

export default RootStore;
