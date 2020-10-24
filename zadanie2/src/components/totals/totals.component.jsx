import React from 'react';
import { connect } from 'react-redux';

import { goToCheckout } from '../../redux/cart/cart.actions';

import './totals.styles.css';

const Totals = ({ cart: { subtotal, grandTotal, shipping }, goToCheckout }) => {
  return (
    <div className="totals">
      <div className="totals__table-header">
        Shipping <span className="totals__table-span">${shipping}</span>
      </div>
      <div className="totals__table-header">Cart Totals</div>
      <div className="totals__table">
        <div className="totals__table-item">
          Subtotal <span className="totals__table-span">${subtotal}</span>
        </div>
        <div className="totals__table-item">
          Grand Total{' '}
          <span
            className="totals__table-span
                                totals__table-span--big"
          >
            ${grandTotal}
          </span>
        </div>
        <button className="btn btn--bold-text" onClick={goToCheckout}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  goToCheckout: () => dispatch(goToCheckout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Totals);
