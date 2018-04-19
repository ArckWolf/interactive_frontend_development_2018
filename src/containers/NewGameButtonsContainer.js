import React from 'react';
import PropTypes from 'prop-types';
import InputGame from '../components/Inputs/InputGame';
import {connect} from 'react-redux';
import {newGameButonSubmitted} from '../actions';

const NewGameButtonsContainer = (props) => {
  return (
    <div className="app-buttons">
      <InputGame onSubmit={props.newGameButonSubmitted} text='Create RPS game' />
      <InputGame onSubmit={props.newGameButonSubmitted} text='Create Hangman game' />
    </div>
  );
};

NewGameButtonsContainer.propTypes = {
  newGameButonSubmitted: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  const newLocal = {
    newGameButonSubmitted: (game) => dispatch(newGameButonSubmitted(game))
  };
  return newLocal;
};

const mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButtonsContainer);
