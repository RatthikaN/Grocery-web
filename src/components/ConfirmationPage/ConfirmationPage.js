import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
    const { cartItems, getTotalCost } = useContext(CartContext);

    return (
        <div className="confirmation-page">
            <div className="confirmation-message">
                <div className="checkmark">&#10003;</div>
                <h1>Order Placed Successfully!</h1>
                <p>Thank you for your purchase!</p>
            </div>
           {/*  <div className="order-summary">
                <h2>Order Summary</h2>
                {cartItems.map((item, index) => {
                    // Safely parse item.price and set a default if NaN
                    const price = parseFloat(item.price);
                    const itemTotal = !isNaN(price) ? (price * item.quantity).toFixed(2) : '0.00';

                    return (
                        <div key={index} className="order-item">
                            <span className="item-name">{item.name}</span>
                            <span className="item-quantity">x {item.quantity}</span>
                            <span className="item-price">₹{itemTotal}</span>
                        </div>
                    );
                })}
                <p className="order-total">Total: ₹{getTotalCost().toFixed(2)}</p>
            </div> */}
        </div>
    );
};

export default ConfirmationPage;
