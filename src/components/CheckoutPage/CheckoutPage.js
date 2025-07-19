// src/components/CheckoutPage/CheckoutPage.js
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { cartItems, getTotalCost, addToCart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handlePayment = (e) => {
        e.preventDefault();
        navigate('/confirmation'); // Navigate to the Confirmation page
    };

    return (
        <div className="checkout-page">
            <h1 className="page-title">Checkout</h1>
            <div className="checkout-container">
                {/* Cart Items Section */}
                <div className="cart-items-section">
                    <h2 className="section-title">Delivery Basket ({cartItems.length})</h2>
                    {cartItems.map((item, index) => {
                        const price = parseFloat(item.price?.toString().replace(/[^\d.-]/g, "")) || 0;
                        const originalPrice = item.originalPrice ? parseFloat(item.originalPrice) : null;
                        const itemTotal = price * item.quantity;

                        return (
                            <div key={index} className="cart-item">
                                <img src={item.image || "https://via.placeholder.com/80"} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-price">
                                        ₹{itemTotal.toFixed(2)}
                                        {originalPrice && (
                                            <span className="original-price">₹{originalPrice.toFixed(2)}</span>
                                        )}
                                    </p>
                                    {originalPrice && (
                                        <p className="savings">You Save ₹{(originalPrice - price).toFixed(2)}</p>
                                    )}
                                    {item.seller && (
                                        <p className="item-seller">Sold by: {item.seller}</p>
                                    )}
                                    <div className="quantity-controls">
                                        <button className="quantity-btn" onClick={() => removeFromCart(item.name)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className="quantity-btn" onClick={() => addToCart(item)}>+</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Payment Summary Section */}
                <div className="payment-summary-section">
                    <div className="checkout-steps">
                        <span className="step active">1</span>
                        <span className="step-divider"></span>
                        <span className="step">2</span>
                        <span className="step-divider"></span>
                        <span className="step">3</span>
                    </div>
                    <h3 className="font-bold text-lg section-title">Payment Details</h3>
                    <div className="payment-details">
                        <p className="detail-row">
                            MRP Total <span>₹{getTotalCost().toFixed(2)}</span>
                        </p>
                        <p className="detail-row">
                            Delivery Fee (Scheduled Delivery) <span className="delivery-fee">FREE</span>
                        </p>
                        <p className="font-bold text-lg detail-row ">
                            Total <span>₹{getTotalCost().toFixed(2)}</span>
                        </p>
                        <form className='border-t border-gray-300 p-3' onSubmit={handlePayment}>
                            <h2 className='text-center font-bold text-lg'>Details</h2>
                            <p>Contact</p>
                            <input className='p-3 mb-3 w-full rounded border border-gray-300' type='email' placeholder='Email' required/>
                            <p>Delivery</p>
                            <input className='p-3 w-full mt-2 rounded border border-gray-300' type='text' placeholder='Name' required/>
                            <input className='p-3 mt-4 w-full rounded border border-gray-300' placeholder='Address' required/>
                            <input className='p-3 w-2/5 mr-5 mt-4 rounded border border-gray-300' type='text' placeholder='State' required/>
                            <input className='p-3 w-2/5 mt-4 rounded border border-gray-300' type='text' placeholder='City' required/>
                            <input className='p-3 mt-4 w-full rounded border border-gray-300' type='number' placeholder='Phone' required/>
                            <button type='submit' className="checkout-btn">Proceed to Payment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
