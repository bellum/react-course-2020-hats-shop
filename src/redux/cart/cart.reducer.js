import CartActionType from './cart.types';
import {updateCartItems, removeCartItem} from './cart.utils';

const INITIAL_STATE = {
    isDropdownHidden: true,
    cartItems: [],  // [{name: "Hat", count: 1}]
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                isDropdownHidden: !state.isDropdownHidden,
            };
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, action.payload),
            };
        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, action.payload, -1),
            };
        case CartActionType.DROP_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default cartReducer;
