import { ADD_ITEM, REMOVE_ITEM } from '../types'
import { vehicles } from "../../components/products/vehicles";

const initialState = {
    cartItems: [],
    vehicles
}

const cartReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case ADD_ITEM:
            const item = state.vehicles.find((vehicle) =>
                vehicle.id === payload.id);
            
            return [
                ...state,
                state.cartItems.push({
                    ...item,
                })
            ]
        case REMOVE_ITEM:
            return state.filter((item) => item.id !== payload);
        default: return state;
    }
}

export default cartReducer;