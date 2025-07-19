import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { useLocation, useNavigate, Link } from "react-router-dom";


const Cart = () => {
  const { cartItems, getTotalCost, addToCart, removeFromCart, getTotalCount } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isCartPage = location.pathname === "/cart";

  //To hide cart in Checkout page
  if (location.pathname === "/checkout") {
    return null;
  }
  if (location.pathname === "/confirmation") {
    return null;
  }

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg z-50 ${isCartPage
          ? "fixed top-24 left-1/2 transform -translate-x-1/2 max-w-4xl w-full px-8"
          : "fixed bottom-4 right-4 max-w-xs w-80"
        }`}
      style={{
        maxHeight: isCartPage ? "calc(100vh - 150px)" : "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>


      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition-all"
          >
            Add Items
          </button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto" style={{ paddingBottom: "1rem" }}>
            <div className="flex justify-between text-gray-600 text-sm font-semibold border-b border-gray-300 pb-2">
              <span>Product</span>
              <span>Price</span>
              <span>Total</span>
            </div>
            <ul className="mt-4">
              {cartItems.map((item) => {
                const price = parseFloat(item.price.toString().replace(/[^\d.-]/g, "")) || 0;
                const itemTotal = price * item.quantity;

                return (
                  <li key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300">
                    <div className="flex items-center space-x-4">
                      {isCartPage && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                      )}
                      <div>
                        <p className="font-semibold text-lg">{item.name}</p>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="px-2 bg-red-400 text-white text-sm rounded hover:shadow-md hover:bg-red-700 transition-all"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="px-2 bg-green-400 text-white text-sm rounded hover:shadow-md hover:bg-green-700 transition-all"
                          >
                            +
                          </button>
                          {isCartPage && (
                            <button
                              onClick={() => removeFromCart(item.name, true)}
                              className="ml-2 text-red-500 text-sm underline hover:text-red-700 transition-all"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">₹{price.toFixed(2)}</p>
                    <p className="text-gray-900 font-semibold text-sm">₹{itemTotal.toFixed(2)}</p>
                  </li>
                );
              })}
            </ul>
          </div>


          {/* Display Total Cost and Checkout Button at the Bottom */}
          <div className="border-t border-gray-300 pt-4 mt-4 sticky bottom-0 bg-white">
            <div className="text-right font-bold text-lg mb-2">
              <p>Total Cost: ₹{getTotalCost().toFixed(2)}</p>
            </div>
            <div className="flex justify-end space-x-4">
              <button className=" text-green-500 hover:underline" onClick={() => navigate('/')}>Continue shopping</button>
              <button className="end-2 p-3 text-white bg-green-500 rounded hover:bg-green-700 transition-all">
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
