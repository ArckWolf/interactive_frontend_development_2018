import RPS from '../games/RPS';
import Hangman from '../games/Hangman';

const GUESS_CHAR_TO_GUESS = {
  'R': 'ROCK',
  'P': 'PAPER',
  'S': 'SCISSORS'
};

const games = {};
let gameId = 0;

export const RPS_GAME_CREATED = 'RPS_GAME_CREATED';
export const rpsGameCreated = () => {
  const game = new RPS();
  gameId++;
  games[gameId] = game;

  return {
    type: RPS_GAME_CREATED,
    payload: {
      id: gameId,
      type: 'RPS',
      moves: []
    }
  };
};

export const HANGMAN_GAME_CREATED = 'HANGMAN_GAME_CREATED';
export const hangmanGameCreated = () => {
  const game = new Hangman();
  gameId++;
  games[gameId] = game;

  return {
    type: HANGMAN_GAME_CREATED,
    payload: {
      id: gameId,
      type: 'Hangman',
      wordView: game.getWordView(),
      wrongCounter: game.getImageId()
    }
  };
};

export const HANGMAN_GUESS_SUBMITTED = 'HANGMAN_GUESS_SUBMITTED';
export const submitHangman = (gameId, letter) => {
  console.log('HANGMAN_GUESS_SUBMITTED'); // eslint-disable-line no-console
    console.log(gameId); // eslint-disable-line no-console
    console.log(letter); // eslint-disable-line no-console
  const game = games[gameId];
  console.log(games); // eslint-disable-line no-console

  game.guess(letter);

  return {
    type: HANGMAN_GUESS_SUBMITTED,
    payload: {
      id: gameId,
      status: game.getStatus(),
      wordView: game.getWordView(),
      wrongCounter: game.getImageId()
    }
  };
};

export const RPS_GUESS_SUBMITTED = 'RPS_GUESS_SUBMITTED';
export const submitRPS = (gameId, letter) => {
  const game = games[gameId];


  if (GUESS_CHAR_TO_GUESS[letter]) {
    game.guess(GUESS_CHAR_TO_GUESS[letter]);

    console.log('RPS_GUESS_SUBMITTED++'); // eslint-disable-line no-console
    console.log(gameId); // eslint-disable-line no-console
    console.log(letter); // eslint-disable-line no-console
    console.log(game); // eslint-disable-line no-console
  }
  return {
    type: RPS_GUESS_SUBMITTED,
    payload: {
      id: gameId,
      status: game.getStatus(),
      moves: game.getMoves()
    }
  };
};
