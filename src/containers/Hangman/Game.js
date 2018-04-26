import React from 'react';
import InputChangesOnChange from '../../components/Inputs/InputChangesOnChange';
import PropTypes from 'prop-types';
import HangingMan from '../../components/Hangman/HangingMan';
import Word from '../../components/Hangman/Word';

const Game = (props) => {
  let PlayArea;
  let fetching = (<div></div>);
  if (props.game.fetchGuessState.inFlight) {
    fetching = (<h3 id="sending">Sending your guess...</h3>);
  } else if (props.game.fetchGuessState.error) {
    fetching = (
      <div id="error">
        <h3>Failed to fetch responce for your guess..</h3>
        <p>{props.game.fetchGuessState.error}</p>
      </div>
    );
  }

  if (props.game.fetchGameState.inFlight) {
    PlayArea = (<h3 id="sending">Fetching Hangman game...</h3>);
  } else if (props.game.fetchGameState.error) {
    PlayArea = (
      <div id="error">
        <h3>Failed to fetch the Hangman Game</h3>
        <p>{props.game.fetchGameState.error}</p>
      </div>
    );
  } else if (props.game.status === 'finished' && props.game.won === true) {
    PlayArea = (
      <div>
        <Word wordView={props.game.wordView} />
        <HangingMan imageId={props.game.wrongCounter} />
    </div>
    );
  } else if (props.game.status === 'finished' && props.game.won === false) {
    PlayArea = (
      <div>
        <HangingMan imageId={props.game.wrongCounter} />
      </div>
    );
  } else {
    PlayArea = (
      <div>
        Guess a letter from the word:
        {fetching}
        <InputChangesOnChange gameID={props.game.id} onSubmit={props.submit} type='text' maxLength={1} />
        <Word wordView={props.game.wordView} />
        <HangingMan imageId={props.game.wrongCounter} />
      </div>
    );
  }

  return (
    <div className='game'>
      <h3> Hangman </h3>
      <div>
        {PlayArea}
      </div>
    </div>
  );
};

 Game.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    wordView: PropTypes.string.isRequired,
    wrongCounter: PropTypes.number.isRequired
  }),
  submit: PropTypes.func.isRequired
};

export default Game;
