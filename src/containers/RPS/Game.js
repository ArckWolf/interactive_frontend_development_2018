import React from 'react';
import MoveHistory from '../../components/RPS/MoveHistory';
import InputChangesOnSubmit from '../../components/Inputs/InputChangesOnSubmit';
// import PropTypes from 'prop-types';

const Game = (props) => {
  console.log('Game-RPS------------------'); // eslint-disable-line no-console
  console.log(props); // eslint-disable-line no-console
  console.log(props.submit); // eslint-disable-line no-console
  console.log(props.game.id); // eslint-disable-line no-console

  let PlayArea;

  if (props.game.status === 'finished') {
    PlayArea = (
      <p> You won! </p>
    );
  } else {
    PlayArea = (
      <div>
        <p> Guess either Rock(R), Paper(P) or Scissors(S) </p>
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

/* Game.propTypes = {
  game: PropTypes.shape({
    guess: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired
  })
};
 */
export default Game;
