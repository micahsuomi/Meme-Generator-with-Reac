import React from 'react';
import './App.css';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

function App() {
  return (
    <div className="App">
    <div className="meme-generator-container">
      <Header />
      <MemeGenerator />
      </div>
    </div>
  );
}

export default App;
