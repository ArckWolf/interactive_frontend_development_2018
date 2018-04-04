/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Move from './Move';

const RoundHistory = (props) => {
    const commentElements = props.history.map((move) => {
        return (
            <Move key={move.id}>
                <h2 className = {move.result}>
                    {'You guessed '+ move.moveUser + ' which ' + move.result + ' against ' + move.moveAI}
                </h2>
            </Move>
        );
    });
    return (
        <div className="item" id="results">
            {commentElements.reverse()}
        </div>
    );
};

export default RoundHistory;
