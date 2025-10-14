import React, { useState } from 'react';
import './ProgramFlow.css';

const ProgramFlow = () => {
  const [activeSession, setActiveSession] = useState('morning');

  const morningSession = [
    { startTime: "8:00 AM", endTime: "8:45 AM", activity: "Registration" },
    { startTime: "8:45 AM", endTime: "9:00 AM", activity: "Opening Prayer and Philippine National Anthem", performer: "Talisay City College Chorale" },
    { startTime: "9:00 AM", endTime: "9:05 AM", activity: "Talisay City Hymn" },
    { startTime: "9:05 AM", endTime: "9:15 AM", activity: "Opening Salvo", performer: "Talisay City College Dance Troupe" },
    { startTime: "9:15 AM", endTime: "9:30 AM", activity: "Welcome Remarks", speaker: "Mr. Macario Cabusas II, Talisay City Chamber President" },
    { startTime: "9:30 AM", endTime: "9:45 AM", activity: "Inspirational Message", speaker: "Hon. Gerald Anthony Gullas, Jr. Mayor – Talisay City, Cebu" },
    { startTime: "9:45 AM", endTime: "10:00 AM", activity: "Message of Support", speaker: "Mr. Albert Uy, Regional Governor of Philippine Chamber of Commerce and Industry" },
    { startTime: "10:00 AM", endTime: "10:30 AM", activity: "Economic Briefing and Industry Insights", speaker: "Archt. Neil Andrew U. Menjares, Chief Economic Development Specialist, Dept of Economy, Planning, and Development Reg. 7" },
    { startTime: "10:30 AM", endTime: "10:45 AM", activity: "DTI", speaker: "Mr. Jason O. Sialana" },
    { startTime: "10:45 AM", endTime: "11:00 AM", activity: "SME Programs: Digital Adaptation; AI for MSMEs", speaker: "Ms. Jinky Francisco, Business Head SME Visayas, PLDT Enterprise" },
    { startTime: "11:00 AM", endTime: "11:15 AM", activity: "SME Programs: Digital Adaptation; AI for MSMEs", speaker: "Ms. Janille Gultiano, Stakeholder Management Specialist" },
    { startTime: "11:15 AM", endTime: "11:30 AM", activity: "Empowering SMEs through Financial Products", speaker: "Adolfo \"Butch\" Laudit III, Senior Relationship Manager, Metrobank Merchant Acquiring Services" },
    { startTime: "11:30 AM", endTime: "11:45 AM", activity: "Financial Stewardship", speaker: "Atty. Sydrick and Atty. Genevieve D. Deiparine, BCBP" },
    { startTime: "11:45 AM", endTime: "12:00 PM", activity: "Q & A Session" },
    { startTime: "12:00 PM", endTime: "1:00 PM", activity: "Lunch Break" }
  ];

  const afternoonSession = [
    { startTime: "1:05 PM", endTime: "1:15 PM", activity: "Intermission Number", performer: "Talisay City College Dance Troupe" },
    { startTime: "1:15 PM", endTime: "1:45 PM", activity: "Message", speaker: "Janssen Torredes, CX & Brand Manager" },
    { startTime: "1:45 PM", endTime: "2:15 PM", activity: "Message", speaker: "Mr.  Ian Mark Anthony C. Tee, Bangko Sentral ng Pilipinas, Bank Officer IV, Regional Economic Affairs Staff, Visayas Regional Office" },
    { startTime: "2:15 PM", endTime: "2:45 PM", activity: "Stories of Growth and Grit", speaker: "Mr. Terence Padrique, Founder and CEO of Lemon Co." },
    { startTime: "2:45 PM", endTime: "3:15 PM", activity: "Brewing Success Through Innovation", speaker: "Mr. Carlo Alex Lopez, Founder and Proprietor of Uncle Brew" },
    { startTime: "3:15 PM", endTime: "3:30 PM", activity: "Q&A Session" },
    { startTime: "3:30 PM", endTime: "3:45 PM", activity: "Coffee Networking" },
    { startTime: "3:45 PM", endTime: "4:00 PM", activity: "Closing Remarks", speaker: "Mr. Rey Nerius C. Calooy, Talisay City Chamber VP – External" },
    { startTime: "4:00 PM", endTime: "5:00 PM", activity: "Photo Op / Special Announcements / Networking / Raffle / End of Program" }
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