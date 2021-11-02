import { combineReducers } from "redux";
import cartReducer from "./cartReducers";

const rootReducer = combineReducers({
    cart: cartReducer, 
})

export default rootReducer;