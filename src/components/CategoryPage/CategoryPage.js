// src/CategoryPage.js
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import categoriesData from '../../data/categoriesData';
import '../Categories/Categories.css';

const ItemCard = ({ item, addToCart }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-md transition-shadow duration-300">
    <img
      loading='lazy'
      src={item.image}
      alt={`Image of ${item.name}`}
      className="w-20 h-20 mb-4 object-cover"
      onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
    />
    <h3 className="text-lg font-medium text-center">{item.name}</h3>
    <p className="text-gray-600">{item.weight}</p>
    <p className="text-green-600 font-semibold">{item.price || "Price Unavailable"}</p>
    <button
      onClick={() => addToCart(item)}
      className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200  button-hover-addcart button"
    >
      <span>Add</span><i class="fa fa-shopping-cart"></i>
    </button>
  </div>
);

const CategoryPage = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { category, items } = location.state || {};

  if (!category || !items) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <p className="text-xl font-semibold text-gray-600">
          No category information found. Please return to the
          <span
            onClick={() => navigate('/')}
            className="text-green-600 cursor-pointer hover:underline ml-1"
          >
            homepage
          </span>.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-600 mt-8 mb-6">{category}</h1>
      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        <p className="text-lg font-medium text-gray-600 mt-4">No items available in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
