export const updateCartItems = (cartItems, item) => {
    const {id} = item;
    for (let i = 0; i < cartItems.length; i ++) {
        let cartItem = cartItems[i];
        if (cartItem.id !== id) {
            continue;
        }
        return [
            ...cartItems.slice(0, i),
            {
                ...item,
                count: cartItem.count + 1,
            },
            ...cartItems.slice(i + 1),
        ]
    }
    return [
        ...cartItems,
        {
            ...item,
            count: 1,
        },
    ];
};
