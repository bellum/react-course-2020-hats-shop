import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartDropdown} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({cartItems, toggleCartDropdown}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">
            {cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.count, 0)}
        </span>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

const mapDispatchToProps = (dispatch) => ({
   toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
