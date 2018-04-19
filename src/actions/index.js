// Action creators can have side-effects
let nextId = 0;
const games = {};
let gameId = 0;

// Export action type constants for reducers to use
export const NEW_GAME_BUTTON_SUBMITTED = 'NEW_GAME_BUTTON_SUBMITTED';
export const newGameButonSubmitted = (game) => {
  console.log('game:'); // eslint-disable-line no-console
  console.log(game); // eslint-disable-line no-console
  newGameStarted(game.play);
  // An action must be a plain JavaScript object (no instances of classes!)
  return {
    type: NEW_GAME_BUTTON_SUBMITTED,
    payload: {
      id: nextId++,
      type: game.type,
      play: game.play
    }
  };
};

export const NEW_GAME_STARTED = 'NEW_GAME_STARTED';
export const newGameStarted = (gameType) => {
  console.log('NEW_GAME_STARTED:'); // eslint-disable-line no-console
  console.log(gameType); // eslint-disable-line no-console
  gameId++;
  games[gameId] = gameType;
};
