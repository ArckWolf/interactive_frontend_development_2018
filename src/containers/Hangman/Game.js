import React from 'react';
import InputChangesOnChange from '../../components/Inputs/InputChangesOnChange';
import PropTypes from 'prop-types';
import HangingMan from '../../components/Hangman/HangingMan';
import Word from '../../components/Hangman/Word';

const Game = (props) => {
  let PlayArea;

  if (props.game.status === 'finished_won') {
    PlayArea = (
      <div>
        <Word wordView={props.game.wordView} />
        <HangingMan imageId={props.game.wrongCounter} />
    </div>
    );
  } else if (props.game.status === 'finished_lost') {
    PlayArea = (
      <div>
        <HangingMan imageId={props.game.wrongCounter} />
      </div>
    );
  } else {
    PlayArea = (
      <div>
        Guess a letter from the word:
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
