// Action creators can have side-effects
let nextId = 1;

// Export action type constants for reducers to use
export const BUTTON_SUBMITTED = 'BUTTON_SUBMITTED';
export const newGameButonSubmitted = (game) => {
  console.log('game:'); // eslint-disable-line no-console
  console.log(game); // eslint-disable-line no-console
  // An action must be a plain JavaScript object (no instances of classes!)
  return {
    type: BUTTON_SUBMITTED,
    payload: {
      id: nextId++,
      type: game.type,
      play: game.play
    }
  };
};
