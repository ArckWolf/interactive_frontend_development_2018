import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RPS from '../games/RPS';
import Hangman from '../games/Hangman';

// Example of controlled form
class InputGame extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit() {
    let play;
    let type;
    if (this.props.text === 'Create RPS game') {
        play = new RPS();
        type = 'RPS';
    } else {
        play = new Hangman();
        type = 'Hangman';
    }
    this.props.onSubmit({type: type, play: play});
  }

  render() {
    return (
      <div className='inputGame-form'>
        <button type='submit' onClick={this.onSubmit.bind(this)}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

InputGame.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default InputGame;
