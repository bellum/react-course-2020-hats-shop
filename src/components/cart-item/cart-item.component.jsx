import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {name, price, imageUrl, count}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {count} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;
