import { ADD_ITEM, REMOVE_ITEM, INCREMENT_ITEM, DECREMENT_ITEM } from "../types";

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

export const incrementItem = (id) => {
    return {
        type: INCREMENT_ITEM,
        payload: id
    };
};

export const decrementItem = (id) => {
    return {
        type: DECREMENT_ITEM,
        payload: id
    };
};
