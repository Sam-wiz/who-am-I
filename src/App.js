import './App.css';
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
    <div>
      <p>Hi</p>
    </div>
  );
}

export default App;
