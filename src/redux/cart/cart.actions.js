import CartActionType from './cart.types';

export const toggleCartDropdown = () => ({
    type: CartActionType.TOGGLE_CART_DROPDOWN,
});


export const addItem = (cartItem) => ({
    type: CartActionType.ADD_ITEM,
    payload: cartItem,
});


export const removeItem = (cartItem) => ({
    type: CartActionType.REMOVE_ITEM,
    payload: cartItem,
});


export const dropItemFromCart = (cartItem) => ({
    type: CartActionType.DROP_ITEM_FROM_CART,
    payload: cartItem,
});
