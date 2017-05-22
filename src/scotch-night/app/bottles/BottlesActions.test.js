import * as BottlesActions from './BottlesActions';
import { LOAD_BOTTLES, BOTTLES_LOADED, ADD_BOTTLE } from './BottlesActionTypes';

test('loadBottles', () => {
    test('should return correct action', () => {
        const action = BottlesActions.loadBottles();

        expect(action.type).toBe(LOAD_BOTTLES);
    });
});

test('bottlesLoaded', () => {
    test('should return correct action', () => {
        const action = BottlesActions.bottlesLoaded();

        expect(action.type).toBe(BOTTLES_LOADED);
    });
});

test('addBottle', () => {
    test('should return correct action', () => {
        const action = BottlesActions.addBottle();

        expect(action.type).toBe(ADD_BOTTLE);
    });
});
