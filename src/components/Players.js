import React from 'react';
import PropTypes from 'prop-types';

const Players = ({players, playerId}) => {
  const playerComponents = players.map((player) => {
    if (playerId === player.id) {
      return <h4 key={player.id}> {player.name + ' (you)'} </h4>;
    } else if (playerId === '') {
      return null;
    } else {
      return <h4 key={player.id}> {player.name} </h4>;
    }
  });

  return (
    <div className='games'>
      {playerComponents}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired,
  playerId: PropTypes.string.isRequired
};

export default Players;
