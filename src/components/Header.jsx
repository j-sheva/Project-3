import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

const Header = ({ theme, toggleTheme, setFilters }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: category,
    }));
    navigate(`/category/${category}`);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: 'general',
    }));
  };

  const toggleMenu = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <div className="header">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="logo"
          onClick={handleLogoClick}
        />
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <div className="column">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>
          <div className="column">
            {categories.slice(3, 6).map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>
          <div className="column">
            {categories.slice(6).map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
