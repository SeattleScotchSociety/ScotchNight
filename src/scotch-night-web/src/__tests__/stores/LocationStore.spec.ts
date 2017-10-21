import * as _ from "lodash";
import { when } from "mobx";

import { locations } from "../../../public/locations";
import { ILocation, LocationStore } from "../../app/stores/LocationStore";
import { locationApi } from "../mocks";

describe("LocationStore", () => {
    describe("loadLocations", () => {
        it("fetches data", (done: () => void) => {
            const store = LocationStore.create({ locations: [] }, { locationApi });
            const expected = locations[0];

            store.loadLocations();

            when(
                () => store.isLoading === false,
                () => {
                    expect(store.locations.length).toBe(locations.length);
                    expect(_.find(store.locations, ["id", expected.id]).name).toBe(expected.name);
                    done();
                },
            );
        });
    });
});
