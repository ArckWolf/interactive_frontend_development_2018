import RPS from '../games/RPS';
import Hangman from '../games/Hangman';

const GUESS_CHAR_TO_GUESS = {
  'R': 'ROCK',
  'P': 'PAPER',
  'S': 'SCISSORS'
};

const games = {};
let gameId = 0;

export const POST_NEW_RPS_GAME_REQUEST = 'POST_NEW_RPS_GAME_REQUEST';
export const postNewRpsGameRequest = () => {
  gameId++;
  return {
    type: POST_NEW_RPS_GAME_REQUEST,
    payload: {
      id: gameId,
      type: 'rps',
      moves: [],
      inFlight: true
    }
  };
};

export const POST_NEW_RPS_GAME_SUCCEEDED = 'POST_NEW_RPS_GAME_SUCCEEDED';
export const postNewRpsGameSucceeded = (responce) => {
  games[responce.id] = responce.game.id;
  return {
  type: POST_NEW_RPS_GAME_SUCCEEDED,
  payload: responce
  };
};

export const POST_NEW_RPS_GAME_FAILD = 'POST_NEW_RPS_GAME_FAILD';
export const postNewRpsGameFaild = (reason) => ({
  type: POST_NEW_RPS_GAME_FAILD,
  payload: reason
});

export const POST_RPS_GUESS_REQUEST = 'POST_RPS_GUESS_REQUEST';
export const postRpsGuessRequest = (id) => ({
  type: POST_RPS_GUESS_REQUEST,
  payload: {
    id: id,
    gameServerId: games[id],
    inFlight: true
  }
});

export const POST_RPS_GUESS_SUCSEEDED = 'POST_RPS_GUESS_SUCSEEDED';
export const postRpsGuessSuceeded = (responce) => ({
    type: POST_RPS_GUESS_SUCSEEDED,
    payload: responce
});

export const POST_RPS_GUESS_FAILD = 'POST_RPS_GUESS_FAILD';
export const postRpsGuessFaild = (reason) => ({
    type: POST_RPS_GUESS_FAILD,
    payload: reason
});


// ----------------------------------------------------------------------------------
export const POST_NEW_HANGMAN_GAME_REQUEST = 'POST_NEW_HANGMAN_GAME_REQUEST';
export const postNewHangmanGameRequest = () => {
  gameId++;
  games[gameId] = gameId;
  return {
    type: POST_NEW_HANGMAN_GAME_REQUEST,
    payload: {
      id: gameId,
      type: 'Hangman',
      wordView: '',
      wrongCounter: 0,
      inFlight: true
    }
  };
};

export const POST_NEW_HANGMAN_GAME_SUCCEEDED = 'POST_NEW_HANGMAN_GAME_SUCCEEDED';
export const postNewHangmanGameSucceeded = (responce) => {
  games[responce.id] = responce.game.id;
  return {
  type: POST_NEW_HANGMAN_GAME_SUCCEEDED,
  payload: responce
  };
};

export const POST_NEW_HANGMAN_GAME_FAILD = 'POST_NEW_HANGMAN_GAME_FAILD';
export const postNewHangmanGameFaild = (reason) => ({
  type: POST_NEW_HANGMAN_GAME_FAILD,
  payload: reason
});

export const POST_HANGMAN_GUESS_REQUEST = 'POST_HANGMAN_GUESS_REQUEST';
export const postHangmanGuessRequest = (id) => ({
  type: POST_HANGMAN_GUESS_REQUEST,
  payload: {
    id: id,
    gameServerId: games[id],
    inFlight: true
  }
});

export const POST_HANGMAN_GUESS_SUCSEEDED = 'POST_HANGMAN_GUESS_SUCSEEDED';
export const postHangmanGuessSuceeded = (responce) => ({
    type: POST_HANGMAN_GUESS_SUCSEEDED,
    payload: responce
});

export const POST_HANGMAN_GUESS_FAILD = 'POST_HANGMAN_GUESS_FAILD';
export const postHangmanGuessFaild = (reason) => ({
    type: POST_HANGMAN_GUESS_FAILD,
    payload: reason
});


// -------------------------------------------------------------------------------------------------------------------
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
  const game = games[gameId];

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
