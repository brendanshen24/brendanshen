// src/App.js
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
      <div className="app">
        <Header />
        <Projects />
      </div>
  );
}

export default App;
