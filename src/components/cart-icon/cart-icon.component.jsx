import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartDropdown} from '../../redux/cart/cart.actions';
import {selectCartItemsNumber} from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({cartItemsNumber, toggleCartDropdown}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsNumber}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItemsNumber: selectCartItemsNumber,
});

const mapDispatchToProps = (dispatch) => ({
   toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
