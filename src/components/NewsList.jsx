import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import { useParams } from 'react-router-dom';
import './NewsList.css';

const API_KEY = 'e9268e793e0b4fecbec3295ade16b3c4';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const NewsList = ({ filters }) => {
  const [articles, setArticles] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: filters.search,
            category: category || filters.category || 'general',
            country: filters.country,
            apiKey: API_KEY,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, [filters, category]);

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsItem key={`${article.url}-${index}`} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
