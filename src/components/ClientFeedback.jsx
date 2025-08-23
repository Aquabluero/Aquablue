import React from 'react';
import './ClientFeedback.css';

const ClientFeedback = () => {
  return (
    <div className="client-feedback-section">
      <h2>WHAT OUR CLIENT SAYS</h2>
      <div className="divider"></div>

      {/* Marquee container */}
      <div className="marquee-container">
        <div className="marquee">
          <p>
            safe Hey, Now I don’t need to boil water for my small kids. I am assured of
            the AquaBlue Rain Quality water purifier giving us pure and safe drinking water.
            &nbsp;&nbsp;&mdash; Neeta, Gujarat
          </p>
          {/* Add more <p> elements if you want multiple statements scrolling */}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
