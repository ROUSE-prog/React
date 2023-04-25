import React from 'react';
import { Link } from 'react-router-dom';

const BugList = () => {
  // Fetch the list of bugs from the API or state management
  // For now, we'll use an array of placeholder bugs
  const bugs = [
    { id: 1, title: 'Bug 1', status: 'Open' },
    { id: 2, title: 'Bug 2', status: 'Closed' },
  ];

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            <Link to={`/bug/${bug.id}`}>{bug.title}</Link> - {bug.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bug
