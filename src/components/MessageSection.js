import React from 'react';
import './MessageSection.css';

const MessageSection = () => {
  return (
    <section className="message-section section">
      <div className="message-container">
        {/* Mayor's Message */}
        <div className="message-card">
          {/* Top Section: Photo + Title */}
          <div className="message-header">
            <div className="message-photo">
              <img 
                src="/images/mayor-photo.png" 
                alt="Mayor Gerald Anthony Gullas"
                className="photo-image"
              />
            </div>
            <div className="message-title">
              <h3>Message from The City Mayor</h3>
              <h4>Gerald Anthony "Sam Sam" Gullas</h4>
            </div>
          </div>
          
          {/* Bottom Section: Actual Message */}
          <div className="message-text">
            <h4>A Warm Welcome to the 1st Talisay City Business Summit 2025</h4>
            
            <p>It is with immense pride and enthusiasm that I welcome all our esteemed entrepreneurs, business leaders, investors, and stakeholders to the 1st Talisay City Business Summit 2025. This landmark event marks a significant milestone in our journey toward a more prosperous and dynamic Talisay City.</p>

            <h5>A Vision for Growth</h5>
            <p>For too long, we've spoken about the immense potential that lies within our city. Today, we are not just talking about potential; we are gathering to activate it. This Summit is more than a series of meetings and discussions; it is a declaration of intent. It is our collective commitment to innovate, invest, and inspire the next chapter of Talisay's economic story.</p>

            <p>Talisay City is strategically positioned for unprecedented growth. We are blessed with a hardworking populace, rich cultural heritage, and a location that makes us a gateway to the region. My administration is fully dedicated to creating an environment where every business, from our thriving SMEs to large-scale enterprises, can not only survive but truly flourish.</p>

            <h5>The Power of Partnership</h5>
            <p>Economic success is never achieved by one sector alone. It requires a strong, collaborative partnership between the local government and the private sector.</p>

            <p>This Summit is the ideal platform to strengthen that bond. Over the next few days, we have the unique opportunity to exchange best practices, identify shared challenges, and co-create practical solutions. We are here to listen, to learn, and to work hand-in-hand to streamline processes, enhance infrastructure, and enact policies that make doing business in Talisay easier, safer, and more profitable. Your insights will be the foundation of our future economic development plans.</p>

            <h5>Charting the Future</h5>
            <p>The themes and discussions at this Summit—from sustainable investment to digital transformation—are not abstract concepts; they are the keys to a resilient and future-proof economy.</p>

            <p>Let us leverage this gathering to forge new connections, explore lucrative ventures, and solidify Talisay City's reputation as a premier destination for investment and opportunity. Let us leave this Summit with actionable plans and a renewed sense of purpose, ensuring that the prosperity we generate is inclusive and benefits every single resident of our beloved city.</p>

            <p>Thank you for your commitment to Talisay. Let us make this inaugural Business Summit a resounding success and the first of many fruitful collaborations.</p>

            <p className="signature">Mabuhay ang Talisay City!</p>
            <p className="signature-name">
              <strong>Gerald Anthony "Sam Sam" Gullas</strong><br />
              City Mayor, Talisay City
            </p>
          </div>
        </div>

        {/* Chamber President's Message */}
        <div className="message-card">
          {/* Top Section: Photo + Title */}
          <div className="message-header">
            <div className="message-photo">
              <img 
                src="/images/president-photo.png" 
                alt="Macario Carl Cabusas II"
                className="photo-image"
              />
            </div>
            <div className="message-title">
              <h3>A Message from the President</h3>
              <h4>Macario "Carl" Cabusas II</h4>
            </div>
          </div>
          
          {/* Bottom Section: Actual Message */}
          <div className="message-text">
            <h4>A New Chapter for Talisay City: Welcoming You to Our 1st Business Summit</h4>

            <p>To our distinguished guests, fellow entrepreneurs, industry leaders, and partners in progress,</p>
            
            <p>It is with immense pride and enthusiasm that I welcome you to the 1st Talisay City Business Summit 2025! This is more than just an event; it is a historic milestone—a declaration of our collective ambition and a bold step toward solidifying Talisay City's position as a premier commercial and industrial center in Central Visayas.</p>

            <p>For too long, we have recognized the incredible, yet often untapped, potential within our community. Today, we stand together to not just talk about the future, but to actively build it. This summit is a direct response to the dynamic changes in our economy and an opportunity to foster a local ecosystem defined by innovation, resilience, and inclusive growth.</p>

            <h5>A Call for Collaboration</h5>
            <p>The theme of this inaugural summit is a testament to what we can achieve when we pool our expertise. Over the next few days, we have the unique chance to engage in crucial discussions, forge vital partnerships, and exchange actionable insights that will drive our individual businesses and our entire city forward.</p>

            <p>I challenge each of you to step outside your comfort zone, to connect with a fellow business owner you haven't met before, and to explore a new idea that could be a game-changer for your company. The strength of the Talisay Chamber of Commerce, Trade, and Industry lies in our unity, and our ability to collaborate is our greatest competitive advantage.</p>

            <h5>Looking Ahead</h5>
            <p>Talisay City is not just a place to do business; it is a community where business thrives. We must ensure that this growth is sustainable, benefiting every sector—from our thriving tourism and retail industries to our emerging manufacturing and tech enterprises.</p>

            <p>Let us use this 1st Talisay City Business Summit as the launching pad for a new era. Let us commit to supporting one another, advocating for policies that streamline operations, and investing in the skills and infrastructure that will power our shared success in the decades to come.</p>

            <p>On behalf of the Chamber, I extend my deepest gratitude to all our organizers, sponsors, speakers, and participants for making this landmark event a reality. Let's make this summit a resounding success and, more importantly, let's ensure it marks the beginning of Talisay City's brightest economic chapter yet.</p>

            <p className="signature">Mabuhay ang Talisay City!</p>
            <p className="signature-name">
              <strong>Sincerely,</strong><br />
              <strong>Macario "Carl" Cabusas II</strong><br />
              President<br />
              Talisay Chamber of Commerce, Trade, and Industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;