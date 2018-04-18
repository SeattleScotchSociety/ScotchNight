import { when } from 'mobx';

import { events } from '../../../public/events';
import { EventStore, IEvent } from '../../app/stores/EventStore';
import { eventApi } from '../mocks';

describe('EventStore', () => {
    describe('loadEvents', () => {
        it('fetches data', (done: () => void) => {
            const store = EventStore.create({ events: [] }, { eventApi });
            const expected = events[0];

            store.loadEvents();

            when(
                () => store.isLoading === false,
                () => {
                    expect(store.events.length).toBe(events.length);

                    const actual = store.events.filter(e => e.id === expected.id)[0];
                    expect(actual.title).toBe(expected.title);

                    done();
                }
            );
        });
    });
});
