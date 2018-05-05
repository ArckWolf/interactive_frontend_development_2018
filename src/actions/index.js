export const CREATE_GAME_REQUESTED = 'CREATE_GAME_REQUESTED';
export const CREATE_GAME_FAILED = 'CREATE_GAME_FAILED';
export const CREATE_GAME_SUCCEEDED = 'CREATE_GAME_SUCCEEDED';

export const GAME_GUESS_REQUESTED = 'GAME_GUESS_REQUESTED';
export const GAME_GUESS_FAILED = 'GAME_GUESS_FAILED';
export const GAME_GUESS_SUCCEEDED = 'GAME_GUESS_SUCCEEDED';

export const LOG_IN_REQUESTED = 'LOG_IN_REQUESTED';
export const LOG_IN_FAILED = 'LOG_IN_FAILED ';
export const LOG_IN_SUCCEEDED = 'LOG_IN_SUCCEEDED';

export const logInRequested = (type) => ({
  type: LOG_IN_REQUESTED,
  payload: type
});

export const createGameRequested = (type) => ({
  type: CREATE_GAME_REQUESTED,
  payload: type
});

export const gameGuessRequested = ({gameId, guess}) => ({
  type: GAME_GUESS_REQUESTED,
  payload: {gameId, guess}
});
