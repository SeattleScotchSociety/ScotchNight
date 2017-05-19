import { combineReducers } from 'redux';
import Bottles from './bottles';
import User from './user';

export const reducer = combineReducers({
    bottles: Bottles.Reducer,
    user: User.Reducer
});
