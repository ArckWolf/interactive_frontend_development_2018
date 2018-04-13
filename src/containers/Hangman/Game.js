import React, {Component} from 'react';
import InputChangesOnChange from '../../components/Inputs/InputChangesOnChange';
import PropTypes from 'prop-types';
import HangingMan from '../../components/Hangman/HangingMan';
import Word from '../../components/Hangman/Word';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordView: this.props.game.getWordView(),
    };
    this.onGuess = this.onGuess.bind(this);
  }

  onGuess(guessChar) {
    const result = this.props.game.guess(guessChar);
    this.setState({
      wordView: result.wordView,
    });
  }

  render() {
    let PlayArea;
    const game = this.props.game;

    if (game.getStatus() === 'finished_won') {
      PlayArea = (
        <div>
          <Word wordView={this.state.wordView} />
          <HangingMan imageId={this.props.game.getImageId()} />
        </div>
        );
    } else if (game.getStatus() === 'finished_lost') {
      PlayArea = (
        <div>
          <HangingMan imageId={this.props.game.getImageId()} />
        </div>
      );
    } else {
      PlayArea = (
        <div>
          Guess a letter from the word:
          <InputChangesOnChange onSubmit={this.onGuess} type='text' maxLength={1} />
          <Word wordView={this.state.wordView} />
          <HangingMan imageId={this.props.game.getImageId()} />
        </div>
      );
    }
    return (
      <div className='game'>
        <h3> Hangman </h3>
        {PlayArea}
      </div>
    );
  }
}

Game.propTypes = {
  game: PropTypes.shape({
    guess: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired,
    getImageId: PropTypes.func.isRequired,
    getWordView: PropTypes.func.isRequired,
  })
};

export default Game;
