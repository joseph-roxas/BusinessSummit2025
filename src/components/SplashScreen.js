import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="logos-container">
        <div className="logo-wrapper">
          <img 
            src="/images/city-hall-logo.png" 
            alt="Talisay City Hall" 
            className="logo-image"
          />
        </div>
        <div className="logo-wrapper">
          <img 
            src="/images/chamber-logo.png" 
            alt="Talisay Chamber" 
            className="logo-image"
          />
        </div>
      </div>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
};

export default SplashScreen;