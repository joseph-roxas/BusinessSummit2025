import React from 'react';
import './LocationDateTime.css';

const LocationDateTime = () => {
  return (
    <section className="location-datetime-section">
      <div className="location-datetime-container">
        <div className="date-time-info">
          <div className="date">Friday, October 17, 2025</div>
          <div className="time">8:00 AM - 5:00 PM</div>
        </div>
        <div className="location-info">
          <div className="location">PEOPLE'S HALL, TALISAY CITY HALL</div>
        </div>
      </div>
    </section>
  );
};

export default LocationDateTime;