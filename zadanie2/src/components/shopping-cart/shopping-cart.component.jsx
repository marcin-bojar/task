import React from 'react';
import { connect } from 'react-redux';

import ItemsList from '../items-list/items-list.component';
import Totals from '../totals/totals.component';
import CustomButton from '../custom-button/custom-button.component';

import { updateCart, goToCheckout } from '../../redux/cart/cart.actions';

import './shopping-cart.styles.css';

class ShoppingCart extends React.Component {
  componentDidMount() {
    const { updateCart } = this.props;
    updateCart();
  }

  render() {
    const { hidden } = this.props.cart;
    const { goToCheckout } = this.props;

    return (
      <div className={'shopping-cart'}>
        <div className={`${hidden ? 'hidden' : ''} shopping-cart__details`}>
          <header className="shopping-cart__header">
            <h1 className="shopping-cart__title">Shopping Cart</h1>
            <CustomButton handleClick={goToCheckout}>
              Proceed to checkout
            </CustomButton>
          </header>

          <section className="shopping-cart__content">
            <ItemsList />
            <Totals />
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
