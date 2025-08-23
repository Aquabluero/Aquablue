import React from 'react';
import './SpecialFeaturesSection.css';

// Predefined feature data (title, color, description)
const features = [
  {
    title: 'MF',
    borderColor: '#E91E63', // Pink top border
    description:
      'A membrane with bigger pores than UF that can remove most contaminants, excluding viruses, chemical reductions, and phosphates.'
  },
  {
    title: 'UF',
    borderColor: '#FF5722', // Orange top border
    description:
      'Ultrafiltration is capable of removing most contaminants, excluding viruses, chemical reductions and phosphates.'
  },
  {
    title: 'UV',
    borderColor: '#4CAF50', // Green top border
    description:
      'UV lamp filter is also used as a secondary source of purification along with RO.'
  },
  {
    title: 'RO',
    borderColor: '#9C27B0', // Purple top border
    description:
      'Reverse Osmosis Technology pushes water through a membrane, ensuring only pure water passes to the other side.'
  }
];

export default function SpecialFeaturesSection() {
  return (
    <div className="special-features-section">
      <div className="special-features-container">
        {/* Title & Subtitle */}
        <h2>Water Purifier Special Features</h2>
        <p className="subtitle">
          A small and futuristic water purifier, the AquaBlue Rain series LUXE.
        </p>

        {/* Cards Grid */}
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              {/* Dynamic top border color */}
              <div
                className="feature-card-header"
                style={{ borderTopColor: feature.borderColor }}
              >
                {feature.title}
              </div>

              <div className="feature-card-body">
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
