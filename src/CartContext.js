// src/CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.name === item.name);
      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name, removeAll = false) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === name
            ? { ...item, quantity: removeAll ? 0 : item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);                     // Clear the cart items
    localStorage.removeItem("cartItems");  // Remove from local storage
  };

  const getTotalCost = () =>
    cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.toString().replace(/[^\d.-]/g, "")) || 0;
      return total + itemPrice * item.quantity;
    }, 0);

  const getTotalCount = () =>
    cartItems.reduce((count, item) => count + item.quantity, 0);

  const hasItemsInCart = () => cartItems.length > 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCost,
        getTotalCount,
        hasItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
