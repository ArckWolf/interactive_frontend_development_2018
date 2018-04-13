import React from 'react';
import PropTypes from 'prop-types';
import RPSGameContainer from '../containers/RPS/Game';
import HangmanGameContainer from '../containers/Hangman/Game';

const GameList = (props) => {
  const gameElements = props.allGames.map((game) => {
    if (game.type === 'RPS') {
        return (
            <RPSGameContainer game={game.play} key={game.id}/>
        );
    } else {
        return (
            <HangmanGameContainer game={game.play} key={game.id}/>
        );
    }
  });
  return (
    <div className="game-list">
      {gameElements}
    </div>
  );
};

GameList.propTypes = {
    allGames: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        play: PropTypes.object.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired,
};

export default GameList;
