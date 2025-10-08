import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    { 
      name: "BYD Cebu", 
      role: "Platinum Sponsor",
      logo: "/images/sponsors/byd.png",
      logoStyle: { width: "300px" }
    },
    { 
      name: "Paseo Ricardo", 
      role: "Gold Sponsor",
      logo: "/images/sponsors/paseo.jpg",
      logoStyle: { width: "180px" }
    },
    { 
      name: "Toyota Talisay City, Island Paints, Cabilan Apartments", 
      role: "Silver Sponsor",
      customLogos: [ // Array of logos with individual widths
        { src: "/images/sponsors/toyota.png", alt: "Toyota Cebu", width: "250px" },
        { src: "/images/sponsors/island.png", alt: "Island Paints", width: "250px" }
      ]
    }
  ];

  return (
    <section className="sponsors-section section">
      <h2 className="section-title">Thank You to our Sponsors</h2>
      <div className="sponsors-container">
        {sponsors.map((sponsor, index) => (
          <div 
            key={index} 
            className="sponsor-card"
            style={{
              backgroundImage: `url('/images/speakers/bg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="sponsor-header">
              <div className="sponsor-logo">
                {/* Single logo for Platinum and Gold */}
                {sponsor.logo && (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="logo-image"
                    style={sponsor.logoStyle}
                  />
                )}
                
                {/* Multiple logos for Silver sponsor */}
                {sponsor.customLogos && (
                  <div className="sponsor-multiple-logos">
                    {sponsor.customLogos.map((logo, logoIndex) => (
                      <img
                        key={logoIndex}
                        src={logo.src}
                        alt={logo.alt}
                        className="logo-image"
                        style={{ width: logo.width }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Placeholder */}
                {!sponsor.logo && !sponsor.customLogos && (
                  <div className="logo-placeholder">
                    {sponsor.name}
                  </div>
                )}
              </div>
              <div className="sponsor-title">
                <h3>{sponsor.name}</h3>
                <h4>{sponsor.role}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;