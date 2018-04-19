import React from 'react';
import PropTypes from 'prop-types';
import GameList from '../components/GameList';
import {connect} from 'react-redux';
import {newGameButonSubmitted} from '../actions';

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


const mapStateToProps = (state) => {
    return {
      games: state.games,
    };
};

const mapDispatchToProps = (dispatch) => {
  console.log('mapStateToProps'); // eslint-disable-line no-console
  console.log(dispatch); // eslint-disable-line no-console

  const newLocal = {
    newGameButonSubmitted: (game) => dispatch(newGameButonSubmitted(game))
  };
  console.log(newLocal); // eslint-disable-line no-console

  return newLocal;
};

// const mapDispatchToProps = undefined; // no dispatched actions

export default connect(mapStateToProps, mapDispatchToProps)(OngoingGamesContainer);
