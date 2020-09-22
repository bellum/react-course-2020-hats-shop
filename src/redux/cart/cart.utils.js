export const updateCartItems = (cartItems, item, count=+1) => {
    const {id} = item;
    for (let i = 0; i < cartItems.length; i ++) {
        let cartItem = cartItems[i];
        if (cartItem.id !== id) {
            continue;
        }
        let newCount = cartItem.count + count;
        if (newCount === 0) {
            return [
                ...cartItems.slice(0, i),
                ...cartItems.slice(i + 1),
            ]
        }
        return [
            ...cartItems.slice(0, i),
            {
                ...item,
                count: newCount,
            },
            ...cartItems.slice(i + 1),
        ]
    }
    if (count < 0) {
        throw new Error(`No item to remove in cart: ${item}`);
    }
    return [
        ...cartItems,
        {
            ...item,
            count: 1,
        },
    ];
};
