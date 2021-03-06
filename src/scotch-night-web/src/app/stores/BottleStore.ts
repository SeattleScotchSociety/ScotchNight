import { observable } from 'mobx';
import { flow, getEnv, getParent, types } from 'mobx-state-tree';

import BottleApi from '../api/BottleApi';
import EventApi from '../api/EventApi';
import NoteApi from '../api/NoteApi';

import { IEvent } from './EventStore';
import { Member } from './MemberStore';

export const BottleNote = types.model('BottleNote', {
    bottleId: types.string,
    rating: types.maybe(types.number),
    thoughts: types.maybe(types.string),
    tags: types.maybe(types.map(types.number))
});

export const BottleRating = types.model('BottleRating', {
    bottleId: types.maybe(types.string),
    memberId: types.maybe(types.string),
    rating: types.maybe(types.number),
    thoughts: types.maybe(types.string),
    tags: types.maybe(types.string),
    finish: types.maybe(types.number),
    fruity: types.maybe(types.number),
    vanilla: types.maybe(types.number),
    smokey: types.maybe(types.number),
    citrus: types.maybe(types.number),
    oily: types.maybe(types.number),
    peppery: types.maybe(types.number)
});

export const Bottle = types.model('Bottle', {
    id: types.identifier(),
    distillery: types.string,
    name: types.string,
    age: types.number,
    description: types.maybe(types.string)
    // bottleUrl: types.maybe(types.string),
    // distilleryUrl: types.maybe(types.string),
    // bottleImageUrl: types.maybe(types.string),
    // memberRatings: types.array(BottleRating),
    // notes: types.maybe(BottleNote),
    // memberNotes: types.maybe(types.array(BottleNote))
});

export const BottleStore = types
    .model('BottleStore', {
        bottles: types.optional(types.array(Bottle), []),
        isLoading: true
    })
    .actions(self => {
        function markLoading(loading: boolean) {
            self.isLoading = loading;
        }

        const addBottle = flow(function* addNewBottle(bottle: IBottle) {
            const { bottleApi, eventApi }: { bottleApi: BottleApi; eventApi: EventApi } = getEnv(self);

            const bottleId = yield bottleApi.addBottle(bottle);

            yield loadBottles();

            const index = self.bottles.findIndex(b => b.id === bottle.id);

            const newBottle = self.bottles[index];

            return newBottle;
        });

        const editBottle = flow(function* editExistingBottle(bottle: IBottle) {
            const { bottleApi, eventApi }: { bottleApi: BottleApi; eventApi: EventApi } = getEnv(self);

            const bottleId = bottle.id;

            yield bottleApi.updateBottle(bottle);

            yield loadBottles();

            const index = self.bottles.findIndex(b => b.id === bottle.id);

            const editedBottle = self.bottles[index];

            return editedBottle;
        });

        function updateBottle(bottle: IBottle) {
            const index = self.bottles.findIndex(b => b.id === bottle.id);

            if (index >= 0) {
                self.bottles.splice(index, 1, bottle);
            } else {
                self.bottles.push(bottle);
            }
        }

        function updateBottles(bottles: IBottle[]) {
            if (!bottles) {
                console.log('no bottles to update');
                return;
            }

            bottles.forEach(updateBottle);
        }

        const loadBottles = flow(function* loadAllBottles() {
            const { bottleApi }: { bottleApi: BottleApi } = getEnv(self);

            const bottles = yield bottleApi.getAll();

            updateBottles(bottles);
            markLoading(false);
        });

        return {
            addBottle,
            editBottle,
            loadBottles,
            updateBottles
        };
    });

export type IBottleNote = typeof BottleNote.Type;
export type IBottleRating = typeof BottleRating.Type;
export type IBottle = typeof Bottle.Type;
export type IBottleStore = typeof BottleStore.Type;
export default BottleStore;
