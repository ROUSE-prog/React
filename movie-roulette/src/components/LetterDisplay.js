// src/components/LetterDisplay.js
import React from 'react';
import './LetterDisplay.css';

const LetterDisplay = ({ letter }) => {
  return (
    <div className="letter-display">
      <h2>Random Letter</h2>
      <div className="letter">{letter}</div>
    </div>
  );
};

export default LetterDisplay;
