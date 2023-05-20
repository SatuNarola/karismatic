// --------------- TYPES ---------------
import { Products, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, ADD_PRODUCT_QTY, REMOVE_PRODUCT_QTY } from '../Types';
import { Tools } from '../../Helper';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    isProductsSuccess: null,
    successMsg: '',
    errorMsg: '',
    ProductsListResponse: [],
    cart: [],
    total: 0,
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

        // FOR THE REMOVE ITEM IN CART
        case ADD_TO_CART:
            return {
                ...state,
                cart: [action.payload.item, ...state.cart],
                total: (Number(state.total) + Number(action.payload.cost)).toFixed(2)
            }

        // FOR THE ADD ITEM IN CART
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.payload.index),
                total: (Number(state.total) - Number(action.payload.cost)).toFixed(2)
            }

        // FOR THE REMOVE ITEM IN CART
        case ADD_PRODUCT_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id == action.payload.item.id ? { ...item, Quantity: Number(action.payload.item.Quantity) + 1 } : item
                ),
                total: (Number(state.total) + Number(action.payload.cost)).toFixed(2)
            }

        case REMOVE_PRODUCT_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id == action.payload.item.id ? { ...item, Quantity: Number(action.payload.item.Quantity) - 1 } : item
                ),
                total: (Number(state.total) - Number(action.payload.cost)).toFixed(2)
            }



        // FOR THE EMPTY CART FEATURE
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }

        default:
            return state;
    }
};
