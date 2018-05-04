import React from 'react';
import {shallow} from 'enzyme';
import RPSGameComponent from '../../src/components/RPS/Game';
import HangmanGameComponent from '../../src/components/Hangman/Game';

describe('New game FLIGHT', () => {
   it('calls new RPS Fetching', () => {
    const newGame = {
        id: 1,
        type: 'rps',
        moves: [],
        fetchGameState: {inFlight: true},
        fetchGuessState: {inFlight: false}
      };

    const RpsGame = shallow(
    <RPSGameComponent
    game={newGame}
    key={1}
    submit={sinon.stub()}/>
    );
    expect(RpsGame.html()).to.contain('<h3 id="sending">Fetching RPS game...</h3>');
  });

  it('calls new RPS done Fetching', () => {
    const newGame = {
        id: 1,
        type: 'rps',
        moves: [],
        fetchGameState: {inFlight: false},
        fetchGuessState: {inFlight: false}
      };

    const RpsGame = shallow(
    <RPSGameComponent
    game={newGame}
    key={1}
    submit={sinon.stub()}/>
    );
    expect(RpsGame.html()).to.not.contain('<h3 id="sending">Fetching RPS game...</h3>');
  });

  it('calls new RPS done Fetching error', () => {
    const newGame = {
        id: 1,
        type: 'rps',
        moves: [],
        fetchGameState: {inFlight: false, error: 'error message'},
        fetchGuessState: {inFlight: false}
      };

    const RpsGame = shallow(
    <RPSGameComponent
    game={newGame}
    key={1}
    submit={sinon.stub()}/>
    );
    expect(RpsGame.html()).to.
    contain('<div id="error"><h3>Failed to fetch the RPS Game</h3><p>error message</p>');
  });

  it('calls new HANGMAN Fetching', () => {
    const newGame = {
        id: 1,
        type: 'hangman',
        wordView: '',
        wrongCounter: 0,
        fetchGameState: {inFlight: true},
        fetchGuessState: {inFlight: false}
      };

    const RpsGame = shallow(
    <HangmanGameComponent
    game={newGame}
    key={1}
    submit={sinon.stub()}/>
    );
    expect(RpsGame.html()).to.contain('<h3 id="sending">Fetching Hangman game...</h3>');
  });

  it('calls new HANGMAN done Fetching', () => {
    const newGame = {
        id: 1,
        type: 'hangman',
        wordView: '',
        wrongCounter: 0,
        fetchGameState: {inFlight: false},
        fetchGuessState: {inFlight: false}
      };

    const RpsGame = shallow(
    <HangmanGameComponent
    game={newGame}
    key={1}
    submit={sinon.stub()}/>
    );
    expect(RpsGame.html()).to.not.contain('<h3 id="sending">Fetching Hangman game...</h3>');
  });

  it('calls new HANGMAN done Fetching error', () => {
    const newGame = {
        id: 1,
        type: 'hangman',
        wordView: '',
        wrongCounter: 0,
        fetchGameState: {inFlight: false, error: 'error message'},
        fetchGuessState: {inFlight: false}
      };

    const RpsGame = shallow(
    <HangmanGameComponent
    game={newGame}
    key={1}
    submit={sinon.stub()}/>
    );
    expect(RpsGame.html()).to.
    contain('<div id="error"><h3>Failed to fetch the Hangman Game</h3><p>error message</p>');
  });
});

describe('New Guess FLIGHT', () => {
    it('calls new RPS guess Fetching', () => {
     const newGame = {
         id: 1,
         type: 'rps',
         moves: [],
         fetchGameState: {inFlight: false},
         fetchGuessState: {inFlight: true}
       };

     const RpsGame = shallow(
     <RPSGameComponent
     game={newGame}
     key={1}
     submit={sinon.stub()}/>
     );
     expect(RpsGame.html()).to.contain('<h3 id="sending">Sending your guess...</h3>');
   });

   it('calls new RPS guess done Fetching', () => {
     const newGame = {
         id: 1,
         type: 'rps',
         moves: [],
         fetchGameState: {inFlight: false},
         fetchGuessState: {inFlight: false}
       };

     const RpsGame = shallow(
     <RPSGameComponent
     game={newGame}
     key={1}
     submit={sinon.stub()}/>
     );
     expect(RpsGame.html()).to.not.contain('<h3 id="sending">Sending your guess...</h3>');
   });

   it('calls new RPS guess done Fetching error', () => {
     const newGame = {
         id: 1,
         type: 'rps',
         moves: [],
         fetchGameState: {inFlight: false},
         fetchGuessState: {inFlight: false, error: 'error message'}
       };

     const RpsGame = shallow(
     <RPSGameComponent
     game={newGame}
     key={1}
     submit={sinon.stub()}/>
     );
     expect(RpsGame.html()).to.
     contain('<div id="error"><h3>Failed to fetch responce for your guess..</h3><p>error message</p>');
   });

   it('calls new HANGMAN guess Fetching', () => {
     const newGame = {
         id: 1,
         type: 'hangman',
         wordView: '',
         wrongCounter: 0,
         fetchGameState: {inFlight: false},
         fetchGuessState: {inFlight: true}
       };

     const RpsGame = shallow(
     <HangmanGameComponent
     game={newGame}
     key={1}
     submit={sinon.stub()}/>
     );
     expect(RpsGame.html()).to.contain('<h3 id="sending">Sending your guess...</h3>');
   });

   it('calls new HANGMAN done Fetching', () => {
     const newGame = {
         id: 1,
         type: 'hangman',
         wordView: '',
         wrongCounter: 0,
         fetchGameState: {inFlight: false},
         fetchGuessState: {inFlight: false}
       };

     const RpsGame = shallow(
     <HangmanGameComponent
     game={newGame}
     key={1}
     submit={sinon.stub()}/>
     );
     expect(RpsGame.html()).to.not.contain('<h3 id="sending">Sending your guess...</h3>');
   });

   it('calls new HANGMAN guess done Fetching error', () => {
     const newGame = {
         id: 1,
         type: 'hangman',
         wordView: '',
         wrongCounter: 0,
         fetchGameState: {inFlight: false},
         fetchGuessState: {inFlight: false, error: 'error message'}
       };

     const RpsGame = shallow(
     <HangmanGameComponent
     game={newGame}
     key={1}
     submit={sinon.stub()}/>
     );
     expect(RpsGame.html()).to.
     contain('<div id="error"><h3>Failed to fetch responce for your guess..</h3><p>error message</p>');
   });
 });

