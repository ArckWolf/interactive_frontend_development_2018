import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const GameList = (props) => {
  const games = props.games.map((game) => {
    if (props.show == true && game.status == 'finished') {
        return null;
      } else if (props.show == false && game.status != 'finished') {
        return null;
      }
    return (
      <li key={game.id}>
        <Link to={`/games/${game.id}`}> type: {game.type} status: {game.status}</Link>
      </li>
    );
  });

    return (
      <div className='gameList'>
        {games}
      </div>
    );
};
GameList.propTypes = {
    games: PropTypes.array.isRequired,
};
export default GameList;
