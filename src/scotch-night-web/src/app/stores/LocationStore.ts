import * as _ from "lodash";
import { observable } from "mobx";
import { flow, getEnv, getParent, types } from "mobx-state-tree";

import LocationApi from "../api/LocationApi";
import { Bottle } from "./BottleStore";

export const Address = types.model("Address", {
    address1: types.string,
    address2: types.string,
    city: types.string,
    state: types.string,
    zipCode: types.string,
});

export const Position = types.model("Position", {
    lat: types.number,
    lng: types.number,
});

export const Location = types.model("Location", {
    id: types.identifier(),
    name: types.string,
    address: types.maybe(Address),
    position: types.maybe(Position)
});

export const LocationStore = types
    .model("LocationStore", {
        locations: types.optional(types.array(Location), []),
        isLoading: true
    })
    .actions((self) => {
        function markLoading(loading: boolean) {
            self.isLoading = loading;
        }

        function updateLocations(locations: ILocation[]): void {
            if (!locations) {
                console.log("locations don't exist");
                return;
            }

            locations.forEach((location: ILocation) => {
                const index = _.findIndex(self.locations, ["id", location.id]);

                if (index >= 0) {
                    self.locations.splice(index, 1, location);
                } else {
                    self.locations.push(location);
                }
            });
        }

        const loadLocations = flow(function* loadAllLocations() {
            const { locationApi }: { locationApi: LocationApi } = getEnv(self);

            const locations = yield locationApi.getAll();
            updateLocations(locations);
            markLoading(false);
        });

        return {
            loadLocations,
            updateLocations
        };
    });

export type ILocation = typeof Location.Type;
export type ILocationStore = typeof LocationStore.Type;
export default LocationStore;