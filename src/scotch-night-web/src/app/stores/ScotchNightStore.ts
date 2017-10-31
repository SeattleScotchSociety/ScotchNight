import * as _ from "lodash";
import { observable } from "mobx";
import { getEnv, getParent, process, types } from "mobx-state-tree";

import MemberApi from "../api/MemberApi";
import NoteApi from "../api/NoteApi";
import { Bottle, BottleNote, IBottle } from "./BottleStore";
import { Event, IEvent } from "./EventStore";
import { IMember, Member } from "./MemberStore";

import { Location } from "../types/mobxCommon";

export const ScotchNightStore = types
    .model("ScotchNightStore", {
        currentUser: types.maybe(Member),
        currentEvent: types.maybe(types.reference(Event)),
        currentBottle: types.maybe(types.reference(Bottle)),
        summaryNotes: types.maybe(BottleNote),
        memberNotes: types.maybe(BottleNote),
    })
    .actions((self) => {
        const setCurrentBottle = process(function* setBottle(bottle: IBottle) {
            const { noteApi }: { noteApi: NoteApi } = getEnv(self);

            self.currentBottle = bottle;

            self.summaryNotes = yield noteApi.getSummaryNotes(bottle.id);
            self.memberNotes = yield noteApi.getMemberNotes(self.currentUser.id, bottle.id);
        });

        const setCurrentUser = (member: IMember) => {
            self.currentUser = member;
        };

        const setCurrentEvent = (event: IEvent) => {
            self.currentEvent = event;
        };

        const setCurrentUserByEmail = process(function* setUser(email: string) {
            const { memberApi }: { memberApi: MemberApi } = getEnv(self);

            if (!email || email === "") {
                return null;
            }

            const member: IMember = yield memberApi.getByEmail(email);

            setCurrentUser(member);

            return member;
        });

        return {
            setCurrentBottle,
            setCurrentEvent,
            setCurrentUser,
            setCurrentUserByEmail
        };
    });

export type IScotchNightStore = typeof ScotchNightStore.Type;
export default ScotchNightStore;