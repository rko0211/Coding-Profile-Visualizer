import React from 'react';
import './Loading.css';  // Add your CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
}

export default Loading;
