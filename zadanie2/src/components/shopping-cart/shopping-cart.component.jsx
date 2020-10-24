import React from 'react';

import CartItem from '../cart-item/cart-item.component';

import './shopping-cart.styles.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [
        {
          id: 1,
          name: 'Headphones',
          price: 11.9,
          quantity: 2,
          imageUrl: './images/headphones.png',
        },
      ],
      subtotal: 0,
      grandTotal: 0,
      shipping: '23.80',
      hidden: false,
    };
  }

  componentDidMount() {
    this.updateCart();
  }

  addItem = itemToAdd => {
    this.setState(state => {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    });
  };

  removeItem = itemToRemove => {
    const { quantity } = itemToRemove;
    if (quantity === 1) return;

    this.setState(state => {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    });
  };

  clearItemFromCart = itemToRemove => {
    this.setState(
      state => {
        return {
          cartItems: state.cartItems.filter(
            item => item.id !== itemToRemove.id
          ),
        };
      },
      () => this.updateCart()
    );
  };

  updateCart = () => {
    let { subtotal, grandTotal, shipping, cartItems } = this.state;

    subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    shipping = subtotal > 100 ? 0 : 23.8;
    grandTotal = cartItems.length > 0 ? subtotal + shipping : 0;

    this.setState({
      subtotal: subtotal.toFixed(2),
      grandTotal: grandTotal.toFixed(2),
      shipping: shipping.toFixed(2),
    });
  };

  toCheckout = () =>
    this.setState(state => {
      return { hidden: !state.hidden };
    });

  render() {
    const { cartItems, subtotal, grandTotal, shipping, hidden } = this.state;

    return (
      <div className={'shopping-cart'}>
        <div className={`${hidden ? 'hidden' : ''} shopping-cart__details`}>
          <header className="shopping-cart__header">
            <h1 className="shopping-cart__title">Shopping Cart</h1>
            <button className="btn" onClick={this.toCheckout}>
              Proceed to checkout
            </button>
          </header>

          <section className="shopping-cart__content">
            <div className="shopping-cart__items">
              <div className="shopping-cart__items-list">
                <div className="shopping-cart__description">
                  <h4
                    className="shopping-cart__category
                            shopping-cart__category--name"
                  >
                    Product Name
                  </h4>

                  <h4
                    className="shopping-cart__category
                            shopping-cart__category--price"
                  >
                    Unit Price
                  </h4>

                  <h4
                    className="shopping-cart__category
                            shopping-cart__category--qty"
                  >
                    Qty
                  </h4>
                </div>

                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    addItem={this.addItem}
                    removeItem={this.removeItem}
                    updateCart={this.updateCart}
                    clearItemFromCart={this.clearItemFromCart}
                  />
                ))}
              </div>
              <div className="shopping-cart__footer">
                <button
                  className="btn btn--bold-text btn--footer"
                  onClick={this.updateCart}
                >
                  Update Shopping Cart
                </button>
              </div>
            </div>

            <div className="shopping-cart__totals">
              <div className="shopping-cart__table-header">
                Shipping{' '}
                <span className="shopping-cart__table-span">${shipping}</span>
              </div>
              <div className="shopping-cart__table-header">Cart Totals</div>
              <div className="shopping-cart__table">
                <div className="shopping-cart__table-item">
                  Subtotal{' '}
                  <span className="shopping-cart__table-span">${subtotal}</span>
                </div>
                <div className="shopping-cart__table-item">
                  Grand Total{' '}
                  <span
                    className="shopping-cart__table-span
                                shopping-cart__table-span--big"
                  >
                    ${grandTotal}
                  </span>
                </div>
                <button
                  className="btn btn--bold-text"
                  onClick={this.toCheckout}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </section>
        </div>
        {hidden && <h2>Your order has been submitted successfully</h2>}
      </div>
    );
  }
}

export default ShoppingCart;
