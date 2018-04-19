import React from 'react';
import NewGameButtonsContainer from './NewGameButtonsContainer';
import OngoingGamesContainer from './OngoingGamesContainer';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
        <NewGameButtonsContainer />
        <OngoingGamesContainer />
    </div>
  );
};

export default App;

