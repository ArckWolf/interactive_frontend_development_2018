import React, {Component} from 'react';
import Input from './Input';
import Game from './Game';
import RoundHistory from './RoundHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userInput: ''};
    this.game = new Game();
  }

  handleInputSubmit({userInput}) {
    this.setState({
        userInput: userInput
      });

    this.game.play(userInput);

    if (this.game.state.history[this.game.getHistory().length - 1].result=='won') {
      document.getElementById('gameInput').style.display = 'none';
      document.getElementById('forUser').innerHTML='You won!';
    }
    document.getElementById('previousMoves').style.display = 'block';
  }

  render() {
    return (
      <div className='container'>
        <h1 className='item'>Game Lobby</h1>
        <h2 className='item'>Rock Paper Scissor</h2>
        <h4 className='item' id="forUser">Guess either Rock(R), Paper(P) or Scissors(S)</h4>
        <Input onSubmit={this.handleInputSubmit.bind(this)} />
        <RoundHistory history={this.game.getHistory()}/>
      </div>
    );
  }
}

export default App;
