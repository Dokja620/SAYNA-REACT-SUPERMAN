// Loader.js

import React from 'react';
import './loader.css';
import gif from './loader.gif';

const LoadingSpinner = () => {
  return (
    <div className="pageLoader">
      <div className="spinner"><img src={gif} alt="Loader gif"/></div>
    </div>
  );
};

export default LoadingSpinner;
