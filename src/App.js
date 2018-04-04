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
    this.game.play(userInput);
    this.setState({
        userInput: userInput
      });
    console.log(this.game.state.history);
    let h = this.game.state.history[this.game.state.history.length-1];
    console.log( 'You guessed '+ h.moveUser + ' which ' + h.result + ' against ' + h.moveAI);
  }

  render() {
    return (
      <div className='container'>
        <h1 className='item'>Input</h1>
        <Input onSubmit={this.handleInputSubmit.bind(this)} />
        <RoundHistory history={this.game.state.history}/>
      </div>
    );
  }
}

export default App;
