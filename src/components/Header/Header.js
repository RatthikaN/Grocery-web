import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { CartContext } from "../../CartContext";

const Header = ({ toggleMenu, user }) => {
  const { getTotalCount } = useContext(CartContext); // Cart item count
  const navigate = useNavigate();

  // State to toggle profile dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Navigate to homepage after logout
  };

  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white p-4 shadow flex items-center justify-between z-10">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-green-600 cursor-pointer"
        onClick={() => navigate('/')}
      >
        Farm<span className="text-black">Shed</span>
      </div>

      {/* Search Box */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-gray-300 mr-4 hidden sm:block"
        />

        {/* Cart Icon with Item Count */}
        <div className="ml-4 relative cursor-pointer" onClick={() => navigate('/cart')}>
          <FaShoppingCart className="text-gray-500 h-6 w-6 hover:text-black" />
          {getTotalCount() > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalCount()}
            </span>
          )}
        </div>

        {/* Menu Icon */}
        <div className="ml-4 cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Profile Dropdown */}
        {user ? (
          <div className="ml-4 relative">
            <div
              className="cursor-pointer"
              onClick={handleProfileClick}
            >
              <FaUserCircle className="text-gray-500 h-8 w-8 hover:text-black" />
            </div>

            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-50 bg-white shadow-lg rounded-md">
                <div className="px-4 py-3 text-gray-700">
                  <span className="font-semibold">Hello, </span>
                  <span className="font-semibold">
                    {user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}
                  </span>
                  <br />
                  <span className="font-semibold">{user.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Login Button */
          <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition-all">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
