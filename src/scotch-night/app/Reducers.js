import { combineReducers } from 'redux';
import Bottles from './bottles';
import Members from './members';
import User from './user';
import Events from './events';

export const reducer = combineReducers({
    bottles: Bottles.Reducer,
    members: Members.Reducer,
    user: User.Reducer,
    events: Events.Reducer
});
