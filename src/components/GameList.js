import React from 'react';
import PropTypes from 'prop-types';
import RPSGameContainer from '../containers/RPS/Game';
import HangmanGameContainer from '../containers/Hangman/Game';

const GameList = (props) => {
    console.log('GameList---------------------'); // eslint-disable-line no-console
    console.log(props); // eslint-disable-line no-console
  const gameElements = props.games.map((game) => {
    console.log(game.id); // eslint-disable-line no-console

    if (game.type === 'RPS') {
        return (
            <RPSGameContainer game={game} key={game.id} submit={props.submitRPS}/>
        );
    } else {
        return (
            <HangmanGameContainer game={game} key={game.id} submit={props.submitHangman}/>
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
};

export default GameList;
