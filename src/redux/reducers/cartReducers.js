import { ADD_ITEM, REMOVE_ITEM } from '../types'
const initialState = [];

const cartReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case ADD_ITEM:
            return [
                ...state,
                payload
            ];
        case REMOVE_ITEM:
            return state.filter((item) => item.id !== payload);
        default: return state;
    }
}

export default cartReducer;