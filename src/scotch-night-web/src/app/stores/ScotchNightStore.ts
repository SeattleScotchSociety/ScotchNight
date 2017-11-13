import * as _ from "lodash";
import { observable } from "mobx";
import { flow, getEnv, getParent, types } from "mobx-state-tree";

import MemberApi from "../api/MemberApi";
import NoteApi from "../api/NoteApi";
import { Bottle, BottleNote, BottleRating, IBottle, IBottleRating } from "./BottleStore";
import { Event, IEvent } from "./EventStore";
import { IMember, Member } from "./MemberStore";

import { Location } from "../types/mobxCommon";

export const ScotchNightStore = types
    .model("ScotchNightStore", {
        currentUser: types.maybe(Member),
        currentEvent: types.maybe(types.reference(Event)),
        currentBottle: types.maybe(types.reference(Bottle)),
        summaryNotes: types.maybe(BottleNote),
        memberNotes: types.maybe(BottleRating),
    })
    .actions((self) => {
        const setCurrentBottle = flow(function* setBottle(bottle: IBottle) {
            const { noteApi }: { noteApi: NoteApi } = getEnv(self);

            self.currentBottle = bottle;

            if(bottle) {
                self.summaryNotes = yield noteApi.getSummaryNotes(bottle.id);
                self.memberNotes = yield noteApi.getMemberNotes(self.currentUser.id, bottle.id);
            }
        });

        const setCurrentUser = (member: IMember) => {
            self.currentUser = member;
        };

        const setCurrentEvent = (event: IEvent) => {
            self.currentEvent = event;
        };

        const setCurrentUserByEmail = flow(function* setUser(email: string) {
            const { memberApi }: { memberApi: MemberApi } = getEnv(self);

            if (!email || email === "") {
                return null;
            }

            const member: IMember = yield memberApi.getByEmail(email);

            setCurrentUser(member);

            return member;
        });

        const setMemberNotes = flow(function* setNotes(notes) {
            const { noteApi }: { noteApi: NoteApi } = getEnv(self);

            notes.memberId = self.currentUser.id;
            notes.bottleId = self.currentBottle.id;
            self.memberNotes = notes;

            yield noteApi.addReview(notes);
        });

        return {
            setCurrentBottle,
            setCurrentEvent,
            setCurrentUser,
            setCurrentUserByEmail,
            setMemberNotes
        };
    });

export type IScotchNightStore = typeof ScotchNightStore.Type;
export default ScotchNightStore;
