import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './Header';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <h1>hello world</h1>
      </div>
    </div>
  )
}

export default App;