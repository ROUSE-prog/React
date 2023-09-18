// src/App.js
import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Roulette</h1>
        <p>
          Test your movie knowledge! Enter a movie title that starts with the
          given letter.
        </p>
      </header>
      <body className="App-body">
      <main>
        <Game />
      </main>
      </body>
    </div>
  );
}

export default App;
