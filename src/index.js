/* eslint-disable */
import React from 'react';
import Game from './Game';
import ReactDOM from 'react-dom';

const game = new Game();

const btn = document.createElement('button');
const items = document.getElementsByClassName('item');

btn.innerHTML='Clicked' + ' times';

btn.onclick = function() {
    game.play('P');
    let state =game.getState();
    btn.innerHTML='You guessed '+ state.movesUser[state.movesUser.length-1] + ' which ' +
      state.results[state.results.length-1] + ' against ' + state.movesAi[state.movesAi.length-1];
  };

items[0].appendChild(btn);

// let currentApp = <Input />;

// ReactDOM.render(currentApp, document.getElementById('root'));

