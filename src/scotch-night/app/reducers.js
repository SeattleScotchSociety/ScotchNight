import { combineReducers } from 'redux';
import Bottles from './bottles';

export const reducer = combineReducers({
    bottles: Bottles.Reducer
});
