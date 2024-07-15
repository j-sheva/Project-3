import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Filters from './components/Filters';
import Hero from './components/Hero';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [filters, setFilters] = useState({
    search: '',
    category: 'general',
    country: 'us',
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`App ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} />
        <Filters theme={theme} setFilters={setFilters} />
        <Routes>
          <Route
            path="/"
            element={<NewsList filters={filters} theme={theme} />}
          />
          <Route
            path="/category/:category"
            element={<NewsList filters={filters} theme={theme} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
