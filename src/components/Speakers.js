import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const speakers = [
    { 
      name: "Roxan L. Mujeres", 
      role: "Acting Head - Bangko Sentral ng Pilipinas",
      photo: null
    },
    { 
      name: "PLDT Enterprise Representative", 
      role: "SME Programs: Digital Adaptation; AI for MSMEs",
      photo: null
    },
    { 
      name: "Metrobank Representative", 
      role: "Empowering SMEs through Financial Products",
      photo: null
    },
    { 
      name: "Atty. Genevieve D. Deiparine", 
      role: "BCBP - Financial Stewardship",
      photo: "/images/speakers/genevieve.png"
    },
    { 
      name: "Mr. Terence Padrique", 
      role: "Founder and CEO of Lemon Co.",
      photo: "/images/speakers/terence.jpg"
    },
    { 
      name: "Mr. Carlo Alex Lopez", 
      role: "Founder and Proprietor of Uncle Brew",
      photo: "/images/speakers/carlo.png"
    }
  ];

  return (
    <section className="speakers-section section">
      <h2 className="section-title">Speakers</h2>
      <div className="speakers-container">
        {speakers.map((speaker, index) => (
          <div 
            key={index} 
            className="speaker-card"
            style={{
              backgroundImage: `url('/images/speakers/bg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="speaker-header">
              <div className="speaker-photo">
                {speaker.photo ? (
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="photo-image"
                  />
                ) : (
                  <div className="photo-placeholder">
                    {speaker.name}
                  </div>
                )}
              </div>
              <div className="speaker-title">
                <h3>{speaker.name}</h3>
                <h4>{speaker.role}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;