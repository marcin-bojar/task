import React from 'react';
import { connect } from 'react-redux';

import { updateCart } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './items-list.styles.css';

const ItemsList = ({ cartItems, updateCart }) => {
  return (
    <div className="items-list">
      <div className="items-list__items">
        <div className="items-list__description">
          <h4 className="items-list__category items-list__category--name">
            Product Name
          </h4>
          <h4 className="items-list__category items-list__category--price">
            Unit Price
          </h4>
          <h4 className="items-list__category items-list__category--qty">
            Qty
          </h4>
        </div>

        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="items-list__footer">
        <CustomButton footer bold handleClick={updateCart}>
          Update Shopping Cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  updateCart: () => dispatch(updateCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
