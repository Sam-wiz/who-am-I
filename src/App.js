import './App.css';
// src/App.js
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => 
  {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return<LoadingSpinner/>;
  }

  return (
    <div>Hi</div>
  );
}

export default App;
