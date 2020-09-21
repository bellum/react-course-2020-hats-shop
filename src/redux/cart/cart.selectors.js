import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems,
);

export const selectCartItemsNumber = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedNumber, currentItem) => accumulatedNumber + currentItem.count,
        0
    ),
);