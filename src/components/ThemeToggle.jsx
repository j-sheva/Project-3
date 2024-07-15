import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="toggle" onClick={toggleTheme}>
      {theme === 'light' ? (
        <>
          <img src="/icons/moon.svg" alt="Dark mode icon" />
        </>
      ) : (
        <>
          <img src="/icons/sun.svg" alt="Light mode icon" />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
