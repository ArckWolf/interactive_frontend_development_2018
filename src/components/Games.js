import React from 'react';
import PropTypes from 'prop-types';
import HangmanGame from '../components/Hangman/Game';
import RPSGame from '../components/RPS/Game';

const Games = ({games, onGuess, gameId}) => {
  const gameComponents = games.map((game) => {
    if (gameId != game.id) {
      return null;
    }
    const onGameGuess = (guess) => {
      onGuess(game.id, guess);
    };

    if (game.type === 'hangman') {
      return <HangmanGame key={game.id} onGuess={onGameGuess} {...game} />;
    } else {
      return <RPSGame key={game.id} onGuess={onGameGuess} {...game} />;
    }
  });

  return (
    <div className='games'>
      {gameComponents}
    </div>
  );
};

Games.propTypes = {
  games: PropTypes.array.isRequired,
  onGuess: PropTypes.func.isRequired
};

export default Games;
