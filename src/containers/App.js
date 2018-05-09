import React from 'react';
import Games from './GamesContainer';
import GameListContainer from './GameListContainer';
import GameButtons from './GameButtonsContainer';
import LoginButtons from './LoginButtonsContainer';
import PlayersContainer from './PlayersContainer';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const OngoingGames = () => (
  <div className='games'>
    <GameListContainer finished = {true} />
  </div>
);
const FinishedGames = () => (
  <div className='games'>
    <GameListContainer finished = {false}/>
  </div>
);

const Header = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
      <LoginButtons />
      <ul>
        <li><Link to="/createGame">Create Games</Link></li>
        <li><Link to="/players">Online Players</Link></li>
        <li><Link to="/ongoingGames">Ongoing Games</Link></li>
        <li><Link to="/finishedGames">Finished Games</Link></li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/players" component={PlayersContainer} />
        <Route path="/createGame" component={GameButtons} />
        <Route path="/ongoingGames" component={OngoingGames} />
        <Route path="/finishedGames" component={FinishedGames} />
        <Route path="/games/:gameId" component={Games} />
      </div>
    </Router>
  );
};

export default App;
