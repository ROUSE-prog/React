// src/components/Results.js
import React from 'react';

const Result = ({ movieData, isCorrect }) => {
  return (
    <div className="Result">
      {movieData && (
        <>
          <h2>{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>
          {movieData.Poster !== 'N/A' && (
            <img
              src={movieData.Poster}
              alt={`Poster for ${movieData.Title}`}
              className="movie-poster"
            />
          )}
          <p>
            {movieData.Title} ({movieData.Year})
          </p>
        </>
      )}
    </div>
  );
};

export default Result;
