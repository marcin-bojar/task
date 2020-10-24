import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import ShoppingCart from './components/shopping-cart/shopping-cart.component';

import './App.css';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  </div>
);

export default App;
