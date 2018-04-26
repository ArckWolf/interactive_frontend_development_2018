import React from 'react';
import MoveHistory from '../../components/RPS/MoveHistory';
import InputChangesOnSubmit from '../../components/Inputs/InputChangesOnSubmit';
import PropTypes from 'prop-types';

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
    PlayArea = (<h3 id="sending">Fetching RPS game...</h3>);
  } else if (props.game.fetchGameState.error) {
    PlayArea = (
      <div id="error">
        <h3>Failed to fetch the RPS Game</h3>
        <p>{props.game.fetchGameState.error}</p>
      </div>
    );
  } else if (props.game.status === 'finished') {
    PlayArea = (
      <p> You won! </p>
    );
  } else {
    PlayArea = (
      <div>
        <p> Guess either Rock(R), Paper(P) or Scissors(S) </p>
        {fetching}
        <InputChangesOnSubmit gameID={props.game.id} onSubmit={props.submit} type='text' maxLength={1} />
      </div>
    );
  }

  return (
    <div className='game'>
      <h3> Rock Paper Scissors </h3>
      {PlayArea}
      <MoveHistory moves={props.game.moves} />
    </div>
  );
};

Game.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    moves: PropTypes.array.isRequired
  }),
  submit: PropTypes.func.isRequired
};

export default Game;
