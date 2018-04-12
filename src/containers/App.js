import React, {Component} from 'react';

import GameList from '../components/GameList';
import InputGame from '../components/Inputs/InputGame';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastGameId: 0,
      games: []
    };
    this.addGame = this.addGame.bind(this);
  }

  addGame(game) {
    const newGameId = this.state.lastGameId + 1;
    const newGames = this.state.games.concat({type: game.type, play: game.play, id: newGameId});
    this.setState({
      lastGameId: newGameId,
      games: newGames
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>Game Lobby</h1>
        </div>
        <div className="app-buttons">
          <InputGame onSubmit={this.addGame.bind(this)} text='Create RPS game'/>
          <InputGame onSubmit={this.addGame.bind(this)} text='Create Hangman game'/>
        </div>
        <GameList allGames={this.state.games}/>
      </div>
    );
  }
}

export default App;

