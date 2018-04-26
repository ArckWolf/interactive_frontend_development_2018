const games = {};
let gameId = 0;

export const POST_NEW_RPS_GAME_REQUEST = 'POST_NEW_RPS_GAME_REQUEST';
export const postNewRpsGameRequest = () => {
  gameId++;
  return {
    type: POST_NEW_RPS_GAME_REQUEST,
    payload: {
      id: gameId
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
    gameServerId: games[id]
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


export const POST_NEW_HANGMAN_GAME_REQUEST = 'POST_NEW_HANGMAN_GAME_REQUEST';
export const postNewHangmanGameRequest = () => {
  gameId++;
  return {
    type: POST_NEW_HANGMAN_GAME_REQUEST,
    payload: {
      id: gameId
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
    gameServerId: games[id]
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
