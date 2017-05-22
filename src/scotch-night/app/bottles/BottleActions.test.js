import * as BottleActions from './BottleActions';
import { LOAD_BOTTLES, BOTTLES_LOADED, ADD_BOTTLE } from './BottleActionTypes';

test('loadBottles', () => {
    test('should return correct action', () => {
        const action = BottleActions.loadBottles();

        expect(action.type).toBe(LOAD_BOTTLES);
    });
});

test('bottlesLoaded', () => {
    test('should return correct action', () => {
        const action = BottleActions.bottlesLoaded();

        expect(action.type).toBe(BOTTLES_LOADED);
    });
});

test('addBottle', () => {
    test('should return correct action', () => {
        const action = BottleActions.addBottle();

        expect(action.type).toBe(ADD_BOTTLE);
    });
});
