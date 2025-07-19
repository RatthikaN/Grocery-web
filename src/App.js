// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { UserProvider } from './UserContext';
import { CartProvider } from './CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <UserProvider>
          <Layout />
        </UserProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
