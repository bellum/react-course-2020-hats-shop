import CartActionType from './cart.types';
import {updateCartItems} from './cart.utils';

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
            }
        default:
            return state;
    }
};

export default cartReducer;
