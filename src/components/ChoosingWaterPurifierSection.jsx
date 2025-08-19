import React from 'react';
import './ChoosingWaterPurifierSection.css';

export default function ChoosingWaterPurifierSection() {
  return (
    <div className="choosing-section">
      {/* 
        Background image is set in CSS. 
        This <div> is our content overlay/container. 
      */}
      <div className="choosing-text-container">
        <h2>HOW TO CHOOSE THE BEST WATER PURIFIER FOR YOUR HOME</h2>
        <p>
          Choosing the right RO water purifier can be a challenge. When it comes to our health, 
          what we eat and drink matters. The human body can live without eating food for days, 
          but not without drinking water. The best way to get rid of impurities is via an 
          effective RO purification system.
        </p>
        <p>
          Gone are those days when you could simply boil water to kill impurities. Water 
          today has countless contaminants that are not eliminated by boiling. With increasing 
          pollution, getting clean water without purification is tough.
        </p>
        <p>
          Modern RO purification is known to be one of the best processes to destroy the 
          harmful contaminants, heavy metals, and dissolved salts in drinking water. These 
          impurities can lead to serious long-term health issues if not removed.
        </p>
        <p>
          RO water purifiers are ideal for ensuring minimum TDS in your water. As water 
          contains various impurities, these purifiers are among the only sources that can 
          remove them within minutes.
        </p>
      </div>
    </div>
  );
}
