import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
// import Page from './Component/Page';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='home' category="general" />} />
          <Route exact path="/*" element={<div key='about'><h1 style={{marginTop:'70px'}}>Error 404 Not Found</h1><Link to="/">Go to Home Page</Link></div>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
