import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header"
        style={{
        backgroundImage: `url('images/background-header.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Logos on top with labels */}
      <div className="top-logos-container">
        <div className="logo-with-label">
          <h3>Presented By</h3>
          <img 
            src="/images/city-hall-logo.png" 
            alt="Talisay City Hall" 
            className="top-logo"
          />
        </div>
        
        <div className="logo-with-label">
          <h3>In Partnership with</h3>
          <img 
            src="/images/chamber-logo.png" 
            alt="Talisay Chamber" 
            className="top-logo"
          />
        </div>
      </div>
      
      {/* Title Section */}
      <div className="title-section">
        <h1>
          <div className="title-line-1">1st City of Talisay</div>
          <div className="title-line-2">Business Summit 2025</div>
        </h1>
        <div className="slogan-container">
          <h2 className="theme slogan-left">MOVING BEYOND SURVIVAL,</h2>
          <h2 className="theme slogan-right">RISING TO GREATNESS!</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;