/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Move from './Move';

const RoundHistory = (props) => {
    const historyElements = props.history.map((move) => {
        return (
            <Move key={move.id}>
                <h2 className = {move.result}>
                    {'You guessed '+ move.moveUser + ' which ' + move.result + ' against ' + move.moveAI}
                </h2>
            </Move>
        );
    });
    return (
        <div className="subContainer item">
            <h2 className="item" id="previousMoves" >Previous moves:</h2>
            <div className="subContainerReverse item">
                {historyElements}
            </div>
        </div>
    );
};

export default RoundHistory;
