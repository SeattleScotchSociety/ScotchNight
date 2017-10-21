import * as _ from "lodash";
import { observable } from "mobx";
import { getEnv, getParent, process, types } from "mobx-state-tree";

import EventApi from "../api/EventApi";
import { Bottle } from "./BottleStore";

export const Location = types.model("Location", {
    lat: types.number,
    lng: types.number,
});

export const Event = types.model("Event", {
    id: types.identifier(),
    date: types.string,
    title: types.string,
    public: types.optional(types.boolean, false),
    loction: types.maybe(Location),
    description: types.maybe(types.string),
    menu: types.maybe(types.array(types.reference(Bottle)))
});

export const EventStore = types
    .model("EventStore", {
        events: types.optional(types.array(Event), []),
        isLoading: true
    })
    .actions((self) => {
        function markLoading(loading: boolean) {
            self.isLoading = loading;
        }

        function updateEvents(json: IEvent[]): void {
            json.forEach((event: IEvent) => {
                const index = _.findIndex(self.events, ["id", event.id]);

                if (index > 0) {
                    self.events.splice(index, 1, event);
                } else {
                    self.events.push(event);
                }
            });
        }

        const loadEvents = process(function* loadAllEvents() {
            const { eventApi }: { eventApi: EventApi } = getEnv(self);

            const events = yield eventApi.getAll();
            updateEvents(events);
            markLoading(false);
        });

        return {
            loadEvents,
            updateEvents
        };
    });

export type IEvent = typeof Event.Type;
export type IEventStore = typeof EventStore.Type;
export default EventStore;