import { combineReducers } from 'redux';
import Bottles from './bottles';
import Members from './members';

export const reducer = combineReducers({
    bottles: Bottles.Reducer,
    members: Members.Reducer
});
