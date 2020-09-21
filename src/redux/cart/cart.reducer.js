import CartActionType from './cart.types';

const INITIAL_STATE = {
    isDropdownHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                isDropdownHidden: !state.isDropdownHidden,
            };
        default:
            return state;
    }
};

export default cartReducer;
