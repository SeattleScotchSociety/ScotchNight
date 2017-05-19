import { ADD_BOTTLE } from './BottlesActionTypes';

const bottlesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_BOTTLE: {
            let id = 1;
            if (state.length > 0) {
                const ids = state.map(bottle => bottle.id);
                id = Math.max(ids) + 1;
            }

            let newBottle = { ...action.payload, id };
            let bottles = [newBottle, ...state];
            console.log(JSON.stringify(bottles));
            return bottles;
        }

        default: {
            return state;
        }
    }
};

export default bottlesReducer;
