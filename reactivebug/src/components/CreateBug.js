import React, { useState } from 'react';

const CreateBug = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the API or state management
    console.log('Bug created:', { title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create Bug</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Create Bug</button>
      </form>
    </div>
  );
};

export default CreateBug;
