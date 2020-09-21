import CartActionType from './cart.types';

export const toggleCartDropdown = () => ({
    type: CartActionType.TOGGLE_CART_DROPDOWN,
});


export const addItem = (cartItem) => ({
    type: CartActionType.ADD_ITEM,
    payload: cartItem,
});
