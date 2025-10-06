import React, { useState } from 'react';
import './ProgramFlow.css';

const ProgramFlow = () => {
  const [activeSession, setActiveSession] = useState('morning');

  const morningSession = [
    { startTime: "8:00 AM", endTime: "9:00 AM", activity: "Registration" },
    { startTime: "9:00 AM", endTime: "9:15 AM", activity: "Opening Prayer and Philippine National Anthem", performer: "Talisay City College Chorale" },
    { startTime: "9:15 AM", endTime: "9:20 AM", activity: "Talisay City Hymn" },
    { startTime: "9:20 AM", endTime: "9:30 AM", activity: "Opening Salvo", performer: "Talisay City College Dance Troupe" },
    { startTime: "9:30 AM", endTime: "9:45 AM", activity: "Welcome Remarks", speaker: "Mr. Macario Cabusas II, Talisay City Chamber President" },
    { startTime: "9:45 AM", endTime: "10:00 AM", activity: "Inspirational Message", speaker: "Hon. Gerald Anthony Gullas, Jr. Mayor – Talisay City, Cebu" },
    { startTime: "10:00 AM", endTime: "10:15 AM", activity: "Message of Support", speaker: "Mr. Albert Uy, Regional Governor of Philippine Chamber of Commerce and Industry" },
    { startTime: "10:15 AM", endTime: "10:45 AM", activity: "Economic Briefing and Industry Insights", speaker: "Ms. Roxan L. Mujeres, Acting Head – Bangko Sentral ng Pilipinas" },
    { startTime: "10:45 AM", endTime: "11:15 AM", activity: "SME Programs: Digital Adaptation; AI for MSMEs", speaker: "PLDT Enterprise" },
    { startTime: "11:15 AM", endTime: "11:30 AM", activity: "Empowering SMEs through Financial Products", speaker: "Metrobank" },
    { startTime: "11:30 AM", endTime: "11:45 AM", activity: "Financial Stewardship", speaker: "Atty. Genevieve D. Deiparine, BCBP" },
    { startTime: "11:45 AM", endTime: "12:00 PM", activity: "Q&A Session" },
    { startTime: "12:00 PM", endTime: "1:00 PM", activity: "Lunch Break" }
  ];

  const afternoonSession = [
    { startTime: "1:00 PM", endTime: "1:15 PM", activity: "Intermission Number", performer: "Talisay City College Dance Troupe" },
    { startTime: "1:15 PM", endTime: "1:45 PM", activity: "Stories of Growth and Grit", speaker: "Mr. Terence Padrique, Founder and CEO of Lemon Co." },
    { startTime: "1:45 PM", endTime: "2:15 PM", activity: "Brewing Success through Innovation", speaker: "Mr. Carlo Alex Lopez, Founder and Proprietor of Uncle Brew" },
    { startTime: "2:15 PM", endTime: "2:45 PM", activity: "Q&A Session" },
    { startTime: "2:45 PM", endTime: "3:30 PM", activity: "Coffee Networking" },
    { startTime: "3:30 PM", endTime: "3:45 PM", activity: "Closing Remarks", speaker: "Mr. Rey Nerius C. Calooy, Talisay City Chamber VP – External" },
    { startTime: "3:45 PM", endTime: "5:00 PM", activity: "Photo Op / Special Announcements / Networking / Raffle / End of Program" }
  ];

  return (
    <section className="program-section section">
      <h2 className="section-title">Program Flow</h2>
      
      <div className="session-tabs">
        <button 
          className={`tab-button ${activeSession === 'morning' ? 'active' : ''}`}
          onClick={() => setActiveSession('morning')}
        >
          MORNING SESSION
        </button>
        <button 
          className={`tab-button ${activeSession === 'afternoon' ? 'active' : ''}`}
          onClick={() => setActiveSession('afternoon')}
        >
          AFTERNOON SESSION
        </button>
      </div>

      <div className="program-timeline">
        {(activeSession === 'morning' ? morningSession : afternoonSession).map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-time">
              <div className="time-range">
                <span className="start-time">{item.startTime}</span>
                <span className="time-separator"> to </span>
                <span className="end-time">{item.endTime}</span>
              </div>
            </div>
            <div className="timeline-content">
              <h4>{item.activity}</h4>
              {item.speaker && <p className="speaker">{item.speaker}</p>}
              {item.performer && <p className="performer">{item.performer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramFlow;