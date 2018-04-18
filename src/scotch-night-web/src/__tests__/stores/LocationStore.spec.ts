import { when } from 'mobx';

import { locations } from '../../../public/locations';
import { ILocation, LocationStore } from '../../app/stores/LocationStore';
import { googleApi, locationApi } from '../mocks';

describe('LocationStore', () => {
    describe('loadLocations', () => {
        it('fetches data', (done: () => void) => {
            const store = LocationStore.create({ locations: [] }, { googleApi, locationApi });
            const expected = locations[0];

            store.loadLocations();

            when(
                () => store.isLoading === false,
                () => {
                    expect(store.locations.length).toBe(locations.length);

                    const actual = store.locations.filter(e => e.id === expected.id)[0];
                    expect(actual.name).toBe(expected.name);

                    done();
                }
            );
        });
    });
});
