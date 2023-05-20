// --------------- TYPES ---------------
import { Products } from '../Types';

// --------------- ACTIONS ---------------
export const getProducts = {
    Request: () => ({ type: Products.REQUEST }),
    Success: (data) => ({ type: Products.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Products.FAILED, payload: error }),
};
