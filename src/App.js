/* eslint-disable */
import React, {Component} from 'react';
import Input from './Input';
import Game from './Game';
import RoundHistory from './RoundHistory'

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

    if(this.game.state.history[this.game.state.history.length - 1].result=="won"){
      document.getElementById('gameInput').style.display = 'none';
      document.getElementById('youWon').style.display = 'block';
    }
  }

  render() {
    return (
      <div className='container'>
        <h1 className='item'>Game Lobby</h1>
        <h2 className='item'>Rock Paper Scissor</h2>
        <h4 className='item'>Guess either Rock(R),Paper(P) or Scissors(S)</h4>
        <h1 id="youWon" className='item' >You Won!</h1>
        <Input onSubmit={this.handleInputSubmit.bind(this)} />
        <RoundHistory history={this.game.state.history}/>
      </div>
    );
  }
}

export default App;
