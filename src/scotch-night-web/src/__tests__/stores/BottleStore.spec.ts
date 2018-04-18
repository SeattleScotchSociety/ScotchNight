import { when } from 'mobx';

import { bottles } from '../../../public/bottles';
import { BottleStore, IBottle } from '../../app/stores/BottleStore';
import { bottleApi } from '../mocks';

describe('BottleStore', () => {
    describe('loadBottles', () => {
        it('fetches data', (done: () => void) => {
            const store = BottleStore.create({ bottles: [] }, { bottleApi });
            const expected = bottles[0];

            store.loadBottles();

            when(
                () => store.isLoading === false,
                () => {
                    expect(store.bottles.length).toBe(bottles.length);

                    const actual = store.bottles.filter(b => b.id === expected.id)[0];
                    expect(actual.name).toBe(expected.name);

                    done();
                }
            );
        });
    });
});
