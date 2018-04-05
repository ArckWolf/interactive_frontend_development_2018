import React from 'react';
import PropTypes from 'prop-types';
import Move from './Move';

const RoundHistory = (props) => {
    const historyElements = props.history.map((move) => {
        return (
            <Move key={move.id}>
                <h3 className = {move.result}>
                    {'You guessed '+ move.moveUser + ' which ' + move.result + ' against ' + move.moveAI}
                </h3>
            </Move>
        );
    });
    return (
        <div className="subContainer item">
            <h4 className="item" id="previousMoves" >Previous moves:</h4>
            <div className="subContainerReverse item">
                {historyElements}
            </div>
        </div>
    );
};

RoundHistory.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape({
      moveUser: PropTypes.string,
      moveAI: PropTypes.string,
      result: PropTypes.string,
      id: PropTypes.number
    })).isRequired
  };

export default RoundHistory;
