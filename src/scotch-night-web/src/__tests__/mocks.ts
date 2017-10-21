import * as fs from "fs";
import { when } from "mobx";

import { BottleStore, IBottle, IBottleStore } from "../app/stores/BottleStore";
import { EventStore, IEvent, IEventStore } from "../app/stores/EventStore";
import { ILocation, ILocationStore, LocationStore } from "../app/stores/LocationStore";
import { IMemberStore, MemberStore } from "../app/stores/MemberStore";
import { IRootStore, RootStore } from "../app/stores/RootStore";

import { bottles } from "../../public/bottles";
import { events } from "../../public/events";
import { locations } from "../../public/locations";
import { members } from "../../public/members";

export { bottles } from "../../public/bottles";
export { events } from "../../public/events";
export { locations } from "../../public/locations";
export { members } from "../../public/members";

export const bottleApi = {
    getAll: () => {
        return Promise.resolve(bottles);
    },
};

export const eventApi = {
    getAll: () => {
        return Promise.resolve(events);
    },
};

export const memberApi = {
    getAll: () => {
        return Promise.resolve(members);
    },
};

export const locationApi = {
    getAll: () => {
        return Promise.resolve(locations);
    },
};

export const rootStore: IRootStore = RootStore.create({
    bottleStore: { bottles },
    eventStore: { events },
    navigation: {},
    memberStore: { ...members[0] }
},
    {
        bottleApi,
        eventApi,
        history,
        locale: "en-US",
        locationApi,
        memberApi
    });