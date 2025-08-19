// src/components/StatsCounter.jsx
import React from 'react';
import useInView from '../hooks/useInView';
import './StatsCounter.css';

export default function StatsCounter({ endValue, label }) {
  // If the element is in view, we add .animate to start the CSS keyframes
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className="stats-card">
      <div
        ref={ref}
        className={`stats-counter ${inView ? 'animate' : ''}`}
        style={{ '--end': endValue }} // pass the number to CSS via a custom property
      />
      <div className="stats-label">{label}</div>
    </div>
  );
}
