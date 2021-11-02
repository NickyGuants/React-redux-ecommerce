import { ADD_ITEM, REMOVE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM } from '../types'
import { vehicles } from "../../components/products/vehicles";

const initialState = {
    cartItems: [],
    vehicles: [...vehicles]
}

const cartReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case ADD_ITEM:
            //get the item from the vehicle array
            const item = state.vehicles.find((vehicle) => vehicle.id === payload);
            //check whether the item exists in the cart
            const inCart = state.cartItems.find((item) => item.id === payload ? true : false);
            console.log(item);
            return {
                ...state,
                cartItems: inCart ?
                state.cartItems.map((item) => item.id === payload
                  ? { ...item, quantity: item.quantity + 1 } : item )
                : [...state.cartItems, { ...item, quantity: 1 }]
            }
        case REMOVE_ITEM:
            const fileteredCart = state.cartItems.filter((item) => item.id !== payload);
            return { ...state, cartItems: [...fileteredCart] }
        case INCREMENT_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                  item.id === payload
                    ? { ...item, quantity: item.quantity+1 }
                    : item
                )
            }
        case DECREMENT_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                  item.id === payload
                    ? { ...item, quantity: item.quantity-1 }
                    : item
                )
            }
        default: return state;
    }
}

export default cartReducer;