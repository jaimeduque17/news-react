import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  // news and category
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const API = async () => {

      const country = 'co';
      const apiKey = '';
      const url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

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
        <NewsList 
          news={news}
        />
      </div>
    </>
  );
}

export default App;
