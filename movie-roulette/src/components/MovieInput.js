// src/components/MovieInput.js
import React, { useState } from 'react';
import './MovieInput.css';

const MovieInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="movie-input">Enter a movie title:</label>
      <input
        type="text"
        id="movie-input"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieInput;
