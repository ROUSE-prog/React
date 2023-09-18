import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoreTracker from "./ScoreTracker";
import './App.css';

function App() {
  const [guess, setGuess] = useState("");
  const [pressedKey, setPressedKey] = useState("");
  const [history, setHistory] = useState([]);
  const [secretWord, setSecretWord] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [revealWord, setRevealWord] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
 


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

  const handleKeyPress = (letter) => {
    if (guess.length && currentWord.length < 5) {
      setGuess(guess + letter);
      setPressedKey(letter);
      console.log("Pressed key:", letter);
      console.log("Current guess:", guess + letter);

      setTimeout(() => {
        setPressedKey("");
      }, 200);
    }
  };
  
  

  const handleReveal = () => {
    setRevealWord(true);
  };

  const handleClose = () => {
    setRevealWord(false);
    fetchWord();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length && currentWord.length === 5 && attempts < 6) {
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
        setCurrentWord("");
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
        <div className="keyboard">
  {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, index) => (
    <button
      key={index}
      onClick={() => handleKeyPress(letter)}
      className={letter === pressedKey ? "pressed-key" : ""}
    >
      {letter}
    </button>
  ))}
</div>

        <div className="currentWord">
  {currentWord.split('').map((letter, index) => (
    <span key={index}>{letter}</span>
  ))}
</div>
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
