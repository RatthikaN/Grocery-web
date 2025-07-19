// src/UserContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { clearCart } = useContext(CartContext);  // Access clearCart from CartContext
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    if (clearCart) {
      clearCart();   // Call clearCart to empty the cart on logout
      console.log("clearCart called on logout");  // Verify if this logs
    } else {
      console.log("clearCart is undefined in UserProvider");  // Check if clearCart is undefined
    }
    setUser(null);    // Reset user state
    navigate('/');    // Redirect to homepage
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
