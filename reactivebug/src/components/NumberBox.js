import React from 'react';
import './numberBox.css';

const NumberBox = ({ index }) => {
  return (
    <div className="number-box">
      {index}
    </div>
  );
};

export default NumberBox;
