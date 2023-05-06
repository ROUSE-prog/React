import React, { useState, useEffect } from 'react';
import Bug from './Bug';
import NumberBox from './NumberBox';
import './bugList.css'; // Import the CSS file

const BugList = () => {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: 'Bug 1',
      description: 'This is the first bug.'
    },
    {
      id: 2,
      title: 'Bug 2',
      description: 'This is the second bug.'
    },
    {
      id: 3,
      title: 'Bug 3',
      description: 'This is the third bug.'
    }
  ]);
  
  useEffect(() => {
    // Fetch bug data here and update the state
    // ...
  }, []);

  return (
    <div className="bug-list-container">
      <h2>Bug List</h2>
      {bugs.map((bug, index) => (
        <div key={bug.id} className="bug-list-item">
          <NumberBox index={index + 1} />
          <Bug bug={bug} />
        </div>
      ))}
    </div>
  );
};

export default BugList;
