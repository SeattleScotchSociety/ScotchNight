import { combineReducers } from 'redux';
import { Reducer as BottlesReducer } from './bottles';

export const reducer = combineReducers({
    bottles: BottlesReducer
});
