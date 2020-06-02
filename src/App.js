import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <>
      <Header
        title="React News Finder"
      />
      <div className="container white">
        <Form />
      </div>
    </>
  );
}

export default App;
