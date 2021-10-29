import { ADD_ITEM, REMOVE_ITEM } from "../types";

export const addItem = (id) =>{
    return {
        type: ADD_ITEM,
        payload: id,
    };
};


export const removeItem = (id) =>{
    return {
        type: REMOVE_ITEM,
        payload: id,
    };
};