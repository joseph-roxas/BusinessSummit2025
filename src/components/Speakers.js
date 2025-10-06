import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const speakers = [
    { name: "Roxan L. Mujeres", role: "Acting Head - Bangko Sentral ng Pilipinas" },
    { name: "PLDT Enterprise Representative", role: "SME Programs: Digital Adaptation; AI for MSMEs" },
    { name: "Metrobank Representative", role: "Empowering SMEs through Financial Products" },
    { name: "Atty. Genevieve D. Deiparine", role: "BCBP - Financial Stewardship" },
    { name: "Mr. Terence Padrique", role: "Founder and CEO of Lemon Co." },
    { name: "Mr. Carlo Alex Lopez", role: "Founder and Proprietor of Uncle Brew" }
  ];

  return (
    <section className="speakers-section section">
      <h2 className="section-title">Speakers</h2>
      <div className="speakers-container">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            {/* Top Section: Photo + Info - Same as message-header */}
            <div className="speaker-header">
              <div className="speaker-photo">
                <div className="photo-placeholder">
                  {speaker.name}
                </div>
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