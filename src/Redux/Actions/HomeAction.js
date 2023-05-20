// --------------- TYPES ---------------
import { Products } from '../Types';

// --------------- ACTIONS ---------------
export const getProducts = {
    Request: (params) => ({ type: Products.REQUEST, params }),
    Success: (data) => ({ type: Products.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Products.FAILED, payload: error }),
};
