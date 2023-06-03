import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoreTracker from "./ScoreTracker";
import './App.css';

function App() {
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [secretWord, setSecretWord] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [revealWord, setRevealWord] = useState(false);

  const fetchWord = async () => {
    try {
      const result = await axios.get('https://owlbot.info/api/v4/dictionary/random', {
        headers: {
          'Authorization': '27d8f5293bf33a26be5071d4f576a6aafcc1a99c'
        }
      });
      const word = result.data.word.toLowerCase();
      if (word.length === 5) {
        setSecretWord(word);
      } else {
        fetchWord();
      }
    } catch (error) {
      console.error("Error fetching word: ", error);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleReveal = () => {
    setRevealWord(true);
  };

  const handleClose = () => {
    setRevealWord(false);
    fetchWord(); // fetch a new word after closing the modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 5 && attempts < 6) {
      let guessHistory = {
        guess: guess,
        matches: guess.split("").map((g, i) => {
          if (g === secretWord[i]) {
            return 'correct-position';
          } else if (secretWord.includes(g)) {
            return 'wrong-position';
          } else {
            return 'incorrect';
          }
        })
      };

      // Ensure history only contains objects with the correct structure
      let newHistory = history.filter(h => typeof h === 'object' && h !== null && 'guess' in h && 'matches' in h);

      setHistory([...newHistory, guessHistory]);
      setAttempts(attempts + 1);

      if (guess === secretWord) {
        setScore(score + 1);
        setGuess("");
        setAttempts(0);
        fetchWord();
      } else {
        setGuess("");
      }
    }
    
  };

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <ScoreTracker score={score} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={guess} onChange={handleChange} maxLength="5" />
        <button type="submit">Guess</button>
      </form>
      <button onClick={handleReveal}>Reveal Secret Word</button>
      <div>
        {history.map((h, index) => (
          <p key={index}>
            {h.guess.split("").map((char, i) => (
              <span 
                key={i} 
                style={{ 
                  color: h.matches[i] === 'correct-position' 
                    ? 'green' 
                    : h.matches[i] === 'wrong-position'
                    ? 'yellow'
                    : 'red'
                }}>
                {char}
              </span>
            ))}
          </p>
        ))}
      </div>
      {revealWord && (
        <div className="modal">
          <div className="modal-content">
            <h2>Secret Word</h2>
            <p>{secretWord}</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );

}

export default App;
