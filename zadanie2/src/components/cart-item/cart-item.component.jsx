import React from 'react';

import './cart-item.styles.css';

const CartItem = ({
  addItem,
  removeItem,
  updateCart,
  clearItemFromCart,
  item,
}) => {
  const { imageUrl, quantity, price, name } = item;

  return (
    <div className="cart-item">
      <div className="cart-item__remove-container">
        <button
          className="cart-item__btn cart-item__btn--remove"
          onClick={() => clearItemFromCart(item)}
        ></button>
      </div>
      <div className="cart-item__img-container">
        <img src={imageUrl} alt="Product" className="cart-item__img" />
      </div>
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__price">${price}</div>
      <div className="quantity-editor">
        <button
          className="quantity-editor__btn"
          onClick={() => removeItem(item)}
        >
          -
        </button>
        <div className="quantity-editor__qty">{quantity}</div>
        <button className="quantity-editor__btn" onClick={() => addItem(item)}>
          +
        </button>
        <button
          className="cart-item__btn cart-item__btn--edit"
          onClick={updateCart}
        ></button>
      </div>
    </div>
  );
};

export default CartItem;
