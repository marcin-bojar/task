import { CartActionTypes } from './cart.types';
import { addItem, removeItem, updateCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [
    {
      id: 1,
      name: 'Headphones',
      price: '11.90',
      quantity: 2,
      imageUrl: './images/headphones.png',
    },
  ],
  subtotal: 0,
  grandTotal: 0,
  shipping: '23.80',
  hidden: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.UPDATE_CART:
      return {
        ...state,
        ...updateCart(state),
      };
    case CartActionTypes.GO_TO_CHECKOUT:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
