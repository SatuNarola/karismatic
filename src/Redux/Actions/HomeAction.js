// --------------- TYPES ---------------
import { Products, ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, ADD_PRODUCT_QTY, REMOVE_PRODUCT_QTY } from '../Types';

// --------------- ACTIONS ---------------
export const getProducts = {
    Request: () => ({ type: Products.REQUEST }),
    Success: (data) => ({ type: Products.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Products.FAILED, payload: error }),
};

export const addToCart = {
    Request: (item) => ({
        type: ADD_TO_CART,
        payload: item
    }),
};

export const removeItem = {
    Request: (item) => ({
        type: REMOVE_FROM_CART,
        payload: item
    }),
};

export const removeQtyItem = {
    Request: (item) => ({
        type: REMOVE_PRODUCT_QTY,
        payload: item
    }),
};

export const addQtyItem = {
    Request: (item) => ({
        type: ADD_PRODUCT_QTY,
        payload: item
    }),
};

export const emptyCart = {
    Request: (item) => ({
        type: EMPTY_CART
    }),
};

