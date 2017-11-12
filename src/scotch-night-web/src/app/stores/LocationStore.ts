import * as _ from "lodash";
import { observable } from "mobx";
import { flow, getEnv, getParent, types } from "mobx-state-tree";

import LocationApi from "../api/LocationApi";
import { Bottle } from "./BottleStore";

export const Position = types.model("Position", {
    lat: types.number,
    lng: types.number,
});

export const Location = types.model("Location", {
    id: types.identifier(),
    name: types.string,
    address1: types.string,
    address2: types.string,
    city: types.string,
    state: types.string,
    zipCode: types.string,
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

        const updateLocation = flow(function* updateAllLocations(location: ILocation) {
            const index = _.findIndex(self.locations, ["id", location.id]);
            const addressString = `${location.address1}, ${location.address2}, ${location.city}, ${location.state}, ${location.zipCode}`;

            const position = yield getGoogleLocationData(addressString);

            if (position) {
                location.position = position;
            }

            if (index >= 0) {
                self.locations.splice(index, 1, location);
            } else {
                self.locations.push(location);
            }
        });

        const updateLocations = flow(function* updateAllLocations(locations: ILocation[]) {
            if (!locations) {
                console.log("locations don't exist");
                return;
            }

            for (const location of locations) {
                yield updateLocation(location);
            }
        });

        const getGoogleLocationData = async (address: string) => {
            return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDyxSigzGBK0sr5JjNaEJlHk9grFZuBkE0`, {
                method: "get"
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((geoData: any) => {
                    if (!geoData) {
                        return;
                    }

                    return geoData.results[0].geometry.location;
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const loadLocations = flow(function* loadAllLocations() {
            const { locationApi }: { locationApi: LocationApi } = getEnv(self);

            const locations = yield locationApi.getAll();
            updateLocations(locations);
            markLoading(false);
        });

        return {
            loadLocations,
            updateLocation,
            updateLocations
        };
    });

export type ILocation = typeof Location.Type;
export type ILocationStore = typeof LocationStore.Type;
export default LocationStore;