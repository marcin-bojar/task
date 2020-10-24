import { CartActionTypes } from './cart.types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = item => dispatch => {
  dispatch({ type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: item });

  return dispatch(updateCart());
};

export const updateCart = () => ({
  type: CartActionTypes.UPDATE_CART,
});

export const goToCheckout = () => ({
  type: CartActionTypes.GO_TO_CHECKOUT,
});
