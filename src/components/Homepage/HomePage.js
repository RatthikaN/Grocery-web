import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Header from '../Header/Header';
import backgroundImage2 from '../../assets/Background/greenimage2.jpg'
import categoriesData from '../../data/categoriesData';
import './HomePage.css';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCategoryClick = (categoryName) => {
    const categoryData = categoriesData.find((cat) => cat.title === categoryName);
    if (categoryData) {
      navigate('/category', { state: { category: categoryName, items: categoryData.items } });
    }
  };

  return (
    <React.Fragment>
      <Header toggleMenu={toggleMenu} user={user} />
      <div className="homepage-container relative min-h-screen bg-gray-100 flex flex-col items-center z-0">
        <div
          className=" absolute inset-0 bg-black"
          style={{
            backgroundImage: `url(${backgroundImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="content z-10 flex flex-col items-center text-center pt-40 pb-20">
          {isMenuOpen && (
            <div className="menu-dropdown">
              <ul>
                {categoriesData.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => handleCategoryClick(category.title)}
                    className="dropdown-item"
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="heading-container">
            <h1 className="main-heading">FarmShed</h1>
            <p className="sub-heading">
              Fresh From the Farm to Your Doorstep. Connecting you directly with farmers for high-quality, sustainable, and eco-friendly produce.
            </p>
          </div>

          <div className="categories-container">
            {categoriesData.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.title)}
                className="category-card"
              >
                <img src={category.items[0].image} alt={category.title} className="category-image" />
                <p className="category-title">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
