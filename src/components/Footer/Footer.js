import React from "react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-100 p-6">
      <div className="flex flex-wrap justify-around mb-6">
        {/* Log in Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p>FarmShed is dedicated to delivering farm-fresh groceries directly from local farmers to your doorstep.<br />
            We prioritize freshness, quality, and fair pricing, supporting sustainable agriculture and <br />
            empowering small-scale farmers. With a wide selection of fruits, vegetables, oils, and essentials,<br />
            FarmShed ensures you enjoy nature’s best while supporting your community.
          </p>
        </div>

        {/* Signup Section */}
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Signup as</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500" onClick={() => navigate('/signup')}>Seller</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500" onClick={() => navigate('/signup')}>Buyer</a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">Vegetables</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">Fruits</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">Chicken</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">Oil</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">Seeds</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FarmShed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
