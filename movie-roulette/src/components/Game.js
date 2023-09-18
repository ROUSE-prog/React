// Game.js
import React, { useState } from "react";
import LetterDisplay from "./LetterDisplay";
import MovieInput from "./MovieInput";
import Result from "./Result";
import axios from 'axios';
import Score from "./Score";

const Game = () => {
  const [randomLetter, setRandomLetter] = useState(generateRandomLetter());
  const [movieData, setMovieData] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);


  const checkMovie = async (movieTitle) => {
    const isValid = isValidMovie(movieTitle, randomLetter);
    if (isValid) {
        try {
            const response = await axios.get("http://www.omdbapi.com/", {
              params: {
                apikey: "60c65c0f",
                t: movieTitle,
              },
  });
  if (response.data.Response === "True") {
    console.log("Valid movie title!");
    setMovieData(response.data);
    setIsCorrect(true);
    setScore(score + 1);

    setRandomLetter(generateRandomLetter());


  } else {
    console.log("Invalid movie title!");
    setMovieData(null);
    setIsCorrect(false);
  }
} catch (error) {
  console.error("Error fetching movie data:", error);
  setMovieData(null);
  setIsCorrect(false);
}
} else {
    setMovieData(null);
    setIsCorrect(false);
// Handle the case when the movie title does not start with the given letter
console.log("Invalid movie title!");
 }

};
  const resetGame = () => {
    setIsCorrect(null);
  };

  return (
    <div>
      <LetterDisplay letter={randomLetter} />
      <MovieInput onSubmit={checkMovie} />
      <Result movieData={movieData} isCorrect={isCorrect} />
      <Score score={score} />
      <button onClick={resetGame}>New Letter</button>
    </div>
  );
};
function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }
  
  function isValidMovie(movieTitle, letter) {
    if (!movieTitle || !letter) {
      return false;
    }
  
    const firstLetter = movieTitle.trim().toUpperCase().charAt(0);
    return firstLetter === letter.toUpperCase();
  }
  
export default Game;
