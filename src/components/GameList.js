import React from 'react';
import PropTypes from 'prop-types';
import RPSGameComponent from '../components/RPS/Game';
import HangmanGameComponent from '../components/Hangman/Game';

const GameList = (props) => {
  const gameElements = props.games.map((game) => {
    if (game.type === 'rps') {
        return (
            <RPSGameComponent game={game} key={game.id} submit={props.submitRPS}/>
        );
    } else {
        return (
            <HangmanGameComponent game={game} key={game.id} submit={props.submitHangman}/>
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
    games: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired,
    submitRPS: PropTypes.func.isRequired,
    submitHangman: PropTypes.func.isRequired
};

export default GameList;
