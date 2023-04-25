import React from 'react';
import { useParams } from 'react-router-dom';

const BugDetails = () => {
  const { id } = useParams();

  // Fetch the bug details using the id from the API or state management
  // For now, we'll use a placeholder bug
  const bug = {
    id,
    title: 'Sample Bug',
    description: 'This is a sample bug description.',
    status: 'Open',
  };

  return (
    <div>
      <h2>{bug.title}</h2>
      <p>ID: {bug.id}</p>
      <p>Description: {bug.description}</p>
      <p>Status: {bug.status}</p>
    </div>
  );
};

export default BugDetails;
