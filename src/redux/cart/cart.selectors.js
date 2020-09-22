import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectIsDropdownHidden = createSelector(
    [selectCart],
    cart => cart.isDropdownHidden,
);

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

export const selectCartItemsPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedNumber, currentItem) => accumulatedNumber + (currentItem.price * currentItem.count),
        0
    ),
);
