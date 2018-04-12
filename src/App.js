import React from 'react';

import RPSGameComponent from './components/RPS/Game';
import HangmanGameComponent from './components/Hangman/Game';
import RPS from './games/RPS';
import Hangman from './games/Hangman';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
        <RPSGameComponent game={new RPS()}/>
        <HangmanGameComponent game={new Hangman()}/>
        <RPSGameComponent game={new RPS()}/>
        <HangmanGameComponent game={new Hangman()}/>
    </div>
  );
};

export default App;
