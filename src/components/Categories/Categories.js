// Categories.js
import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import categoriesData from '../../data/categoriesData';
import './Categories.css';


const ItemCard = ({ item, addToCart }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-md transition-shadow duration-300">
    <img
      src={item.image}
      alt={`Image of ${item.name}`}
      className="w-20 h-20 mb-4 object-cover"
      onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Image+Unavailable")}
    />
    <h3 className="text-lg font-medium text-center">{item.name}</h3>
    <p className="text-gray-600">{item.weight}</p>
    <p className="text-green-600 font-semibold">
      { item.price || "Price Unavailable"}
    </p>
    <button
      onClick={() => addToCart(item)}
      className="mt-2 px-3 py-1 rounded  button-hover-addcart button"
    >
      <span>Add</span><i class="fa fa-shopping-cart"></i>
    </button>
  </div>
);

const Category = ({ category, addToCart }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {category.items.map((item, idx) => (
        <ItemCard key={idx} item={item} addToCart={addToCart} />
      ))}
    </div>
  </div>
);

const Categories = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-6">
      {categoriesData.map((category, index) => (
        <Category key={index} category={category} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Categories;