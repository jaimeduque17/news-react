import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  // news and category
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const API = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=`;

      const response = await fetch(url);
      const news = await response.json();

      setNews(news.articles);
    }
    API();
  }, [category]);

  return (
    <>
      <Header
        title="React News Finder"
      />
      <div className="container white">
        <Form 
          setCategory={setCategory}
        />
      </div>
    </>
  );
}

export default App;
