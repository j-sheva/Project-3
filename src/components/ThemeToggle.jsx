import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const icon = theme === 'light' ? 'moon.svg' : 'sun.svg';

  return (
    <button className="toggle" onClick={toggleTheme}>
      <img src={`${process.env.PUBLIC_URL}/icons/${icon}`} alt="toggle icon" />
    </button>
  );
};

export default ThemeToggle;
