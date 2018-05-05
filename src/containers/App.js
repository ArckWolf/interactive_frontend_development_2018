import React from 'react';

import Games from './GamesContainer';
import GameButtons from './GameButtonsContainer';
import LoginButtons from './LoginButtonsContainer';
import PlayersContainer from './PlayersContainer';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
      <LoginButtons />
      <PlayersContainer />
      <GameButtons />
      <Games />
    </div>
  );
};

export default App;
