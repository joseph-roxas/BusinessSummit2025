import React from 'react';
import './RegistrationSection.css';

const RegistrationSection = () => {
  return (
    <section className="registration-section section">
      <div className="registration-container">
        <h2 className="section-title">Join Us Now!</h2>
        <div className="buttons-container">
          <a 
            href="https://forms.gle/xNz5xQ1145Kqzwo26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="registration-button summit-button"
          >
            Register for Business Summit
          </a>
          <a 
            href="https://forms.gle/2aseAKvoG9Ee2oKE8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="registration-button chamber-button"
          >
            Join Talisay Chamber
          </a>
        </div>
        <p className="registration-note">
          Don't miss this opportunity to be part of Talisay City's premier business event!
        </p>
      </div>
    </section>
  );
};

export default RegistrationSection;