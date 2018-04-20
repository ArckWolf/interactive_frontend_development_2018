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

export const RPS_GAME_CREATED = 'RPS_GAME_CREATED';
export const rpsGameCreated = () => {
  return {
    type: RPS_GAME_CREATED,
    payload: {
      id: nextId++
    }
  };
};

export const HANGMAN_GAME_CREATED = 'HANGMAN_GAME_CREATED';
export const hangmanGameCreated = () => {
  return {
    type: HANGMAN_GAME_CREATED,
    payload: {
      id: nextId++
    }
  };
};
