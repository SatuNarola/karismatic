// --------------- TYPES ---------------
import { Products } from '../Types';
import { Tools } from '../../Helper';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    isProductsSuccess: null,
    successMsg: '',
    errorMsg: '',
    ProductsListResponse: []
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    // console.log('\n\nACTIONS\n\n', action.type)
    switch (action.type) {
        // Register
        case Products.REQUEST:
            return { ...state, isProductsSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Products.SUCCESS:
            return { ...state, isProductsSuccess: true, successMsg: action.payload?.message, ProductsListResponse: action && action['payload'] };
        case Products.FAILED:
            return { ...state, isProductsSuccess: false, error: action?.payload, errorMsg: Tools.trimString(action.payload.message) };
        default:
            return state;
    }
};
