export const addItem = (cartItems, itemToAdd) => {
  return cartItems.map(item =>
    item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const removeItem = (cartItems, itemToRemove) => {
  const { quantity } = itemToRemove;
  if (quantity === 1) return cartItems;

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const updateCart = cartData => {
  let { subtotal, grandTotal, shipping, cartItems } = cartData;

  subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  shipping = subtotal > 100 ? 0 : 23.8;
  grandTotal = cartItems.length > 0 ? subtotal + shipping : 0;

  shipping = shipping.toFixed(2);
  subtotal = subtotal.toFixed(2);
  grandTotal = grandTotal.toFixed(2);

  return { shipping, subtotal, grandTotal };
};
