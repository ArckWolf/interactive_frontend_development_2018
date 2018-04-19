import React from 'react';
import PropTypes from 'prop-types';
import GameList from '../components/GameList';
import {connect} from 'react-redux';

const OngoingGamesContainer = (props) => {
  return (
      <div className="app-games">
        <GameList allGames={props.games}/>
      </div>
  );
};

OngoingGamesContainer.propTypes = {
    games: PropTypes.array.isRequired,
};

const mapDispatchToProps = undefined;

const mapStateToProps = (state) => {
    return {
      games: state.games,
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(OngoingGamesContainer);
