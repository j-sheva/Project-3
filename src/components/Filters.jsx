import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ theme, setFilters }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ search, category, country });
  };

  return (
    <div className={`form_wrapper ${theme}`}>
      <form onSubmit={handleSubmit}>
        <input
          className={`input ${theme}`}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <select
          className={`select ${theme}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
        <select
          className={`select ${theme}`}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="us">USA</option>
          <option value="uk">UK</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
          <option value="in">India</option>
        </select>
        <button className={`button ${theme}`} type="submit">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
