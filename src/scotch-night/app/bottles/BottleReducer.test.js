import BottleReducer from './BottleReducer';
import { BOTTLES_LOADED, ADD_BOTTLE } from './BottleActionTypes';

test('ADD_BOTTLE should add new bottle', () => {
    test('should return correct action', () => {
        const state = {
            bottles: []
        };

        const action = {
            type: ADD_BOTTLE,
            bottle: {}
        };

        let newState = BottleReducer(state, action);

        expect(newState.bottles.length).toBe(1);
    });
});
