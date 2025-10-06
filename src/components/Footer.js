import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logos">
          <div className="footer-logo">
            <img 
              src="/images/city-hall-logo.png" 
              alt="Talisay City Hall" 
              className="footer-logo-image"
            />
          </div>
          <div className="footer-logo">
            <img 
              src="/images/chamber-logo.png" 
              alt="Talisay Chamber" 
              className="footer-logo-image"
            />
          </div>
        </div>
        <div className="footer-info">
          <h3>1st Talisay City Business Summit 2025</h3>
          <p>"MOVING BEYOND SURVIVAL, RISING TO GREATNESS!"</p>
          <p className="copyright">© 2025 Talisay City Business Summit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;