// src/Layout.js
import React, { useContext } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from '../Homepage/HomePage';
import CategoryPage from '../CategoryPage/CategoryPage';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';  
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import { UserContext } from '../../UserContext';
import { CartContext } from '../../CartContext';

function Layout() {
  const { user } = useContext(UserContext);
  const { hasItemsInCart } = useContext(CartContext);
  const location = useLocation();
  
  const showCategoriesAndFooter = location.pathname === '/';

  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" replace />;
  };

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />  
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      
      {showCategoriesAndFooter && <Categories />}
      {showCategoriesAndFooter && <Footer />}

      {hasItemsInCart() && (
        <div className="fixed bottom-4 right-4">
          <Cart />
        </div>
      )}
    </>
  );
}

export default Layout;
