import React from 'react';
import { Link } from 'react-router-dom';

const Bug = ({ bug, index }) => {
  return (
    <div className="bug-card">
      <div className="bug-card-number">{index}</div>
      <div className="bug-card-content">
        <Link to={`/bug/${bug.id}`} className="bug-card-title">
          {bug.title}
        </Link>
        <p className="bug-card-description">{bug.description}</p>
        {/* Other bug details */}
      </div>
    </div>
  );
};

export default Bug;
