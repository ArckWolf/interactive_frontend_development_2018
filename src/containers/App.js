import React from 'react';

import Games from './GamesContainer';
import GameButtons from './GameButtonsContainer';
import LoginButtons from './LoginButtonsContainer';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
      <LoginButtons />
      <GameButtons />
      <Games />
    </div>
  );
};

export default App;
