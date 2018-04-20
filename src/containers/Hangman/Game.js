import React from 'react';
import InputChangesOnChange from '../../components/Inputs/InputChangesOnChange';
// import PropTypes from 'prop-types';
import HangingMan from '../../components/Hangman/HangingMan';
import Word from '../../components/Hangman/Word';

const Game = (props) => {
  console.log('Game--HANGMAN-----------------'); // eslint-disable-line no-console
  console.log(props); // eslint-disable-line no-console
  console.log(props.submit); // eslint-disable-line no-console
  console.log(props.game.id); // eslint-disable-line no-console
  const lost = (
    <div>
      <HangingMan imageId={props.game.wrongCounter} />
    </div>
  );
  const won = (
    <div>
      <Word wordView={props.game.wordView} />
      <HangingMan imageId={props.game.wrongCounter} />
  </div>
  );
  const play = (
    <div>
      Guess a letter from the word:
      <InputChangesOnChange gameID={props.game.id} onSubmit={props.submit} type='text' maxLength={1} />
      <Word wordView={props.game.wordView} />
      <HangingMan imageId={props.game.wrongCounter} />
    </div>
  );

  let PlayArea;
  if (props.game.status === 'finished_won') {
    PlayArea = won;
  } else if (props.game.status === 'finished_lost') {
    PlayArea = lost;
  } else {
    PlayArea = play;
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

/* const gameElements = props.games.map((game) => {
  if (game.type === 'RPS') {
      return (
          <RPSGameContainer game={game} key={game.id} submit={game.submitHangman}/>
      );
  } else {
      return (
          <HangmanGameContainer game={game} key={game.id} submit={game.submitRPS}/>
      );
  }
});
return (
  <div className="game-list">
    {gameElements}
  </div>
); */
/* Game.propTypes = {
  game: PropTypes.shape({
    guess: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired,
    getImageId: PropTypes.func.isRequired,
    getWordView: PropTypes.func.isRequired,
  })
};
 */
export default Game;
