import React from 'react';

import {connect} from 'react-redux';

import './checkout-item.styles.scss';
import {addItem, removeItem, dropItemFromCart} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, addItem, removeItem, dropItemFromCart}) => {
    const {imageUrl, name, count, price} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{count}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => dropItemFromCart(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    dropItemFromCart: item => dispatch(dropItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
