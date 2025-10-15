import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const speakers = [
    // { 
    //   name: "Roxan L. Mujeres", 
    //   role: "Acting Head - Bangko Sentral ng Pilipinas",
    //   photo: null
    // },
    // { 
    //   name: "PLDT Enterprise Representative", 
    //   role: "SME Programs: Digital Adaptation; AI for MSMEs",
    //   photo: null
    // },
    // { 
    //   name: "Metrobank Representative", 
    //   role: "Empowering SMEs through Financial Products",
    //   photo: null
    // },
    { 
      name: "Atty. Genevieve D. Deiparine", 
      role: "BCBP - Financial Stewardship",
      photo: "/images/speakers/genevieve.png"
    },
    { 
      name: "Atty. Sydrick Jose Andrei “Syd” G. Deiparine", 
      role: "Lawyer, Professor, and a Licensed Real Estate Broker. Senior Partner of Dumdum Legorio & Deiparine Law Firm",
      photo: "/images/speakers/syd.jpg"
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
    },
    { 
      name: "Mr. Adolfo \"Butch\" Laudit III", 
      role: "Senior Relationship Manager, Metrobank Merchant Acquiring Services",
      photo: "/images/speakers/laudit.jpg"
    },
    { 
      name: "Mr.  Ian Mark Anthony C. Tee", 
      role: "Bangko Sentral ng Pilipinas, Bank Officer IV, Regional Economic Affairs Staff, Visayas Regional Office",
      photo: "/images/speakers/tee.jpg"
    },
    { 
      name: "Mr.  Neil Menjares", 
      role: "Chief Economic Development Specialist of the Policy Formulation and Planning Division at the Department of Economy, Planning, and Development Regional Office VII",
      photo: "/images/speakers/menjares.jpg"
    },
    { 
      name: "Mr. Jason O. Sialana", 
      role: "Negosyo Center Business Counselor - City of Carcar",
      photo: "/images/speakers/sialana.jpg"
    },
    { 
      name: "Ms. Jinky Francisco", 
      role: "PLDT Enterprise Business Head, SME Group Visayas",
      photo: "/images/speakers/francisco.jpg"
    },
    { 
      name: "Ms. Janille Rose Gultiano", 
      role: "Stakeholder Management Specialist",
      photo: "/images/speakers/gultiano.jpg"
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