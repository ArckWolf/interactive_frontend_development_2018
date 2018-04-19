let nextId = 0;

export const NEW_GAME_BUTTON_SUBMITTED = 'NEW_GAME_BUTTON_SUBMITTED';
export const newGameButonSubmitted = (game) => {
  return {
    type: NEW_GAME_BUTTON_SUBMITTED,
    payload: {
      id: nextId++,
      type: game.type,
      play: game.play
    }
  };
};
