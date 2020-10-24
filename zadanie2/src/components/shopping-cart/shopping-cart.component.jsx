import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import { updateCart, goToCheckout } from '../../redux/cart/cart.actions';

import './shopping-cart.styles.css';

class ShoppingCart extends React.Component {
  componentDidMount() {
    const { updateCart } = this.props;
    updateCart();
  }

  render() {
    const {
      cartItems,
      subtotal,
      grandTotal,
      shipping,
      hidden,
    } = this.props.cart;

    const { updateCart, goToCheckout } = this.props;

    return (
      <div className={'shopping-cart'}>
        <div className={`${hidden ? 'hidden' : ''} shopping-cart__details`}>
          <header className="shopping-cart__header">
            <h1 className="shopping-cart__title">Shopping Cart</h1>
            <button className="btn" onClick={goToCheckout}>
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
                    updateCart={updateCart}
                    clearItemFromCart={this.clearItemFromCart}
                  />
                ))}
              </div>
              <div className="shopping-cart__footer">
                <button
                  className="btn btn--bold-text btn--footer"
                  onClick={updateCart}
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
                <button className="btn btn--bold-text" onClick={goToCheckout}>
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

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  updateCart: () => dispatch(updateCart()),
  goToCheckout: () => dispatch(goToCheckout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
