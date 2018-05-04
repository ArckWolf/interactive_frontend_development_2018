import reducer from '../../src/reducers/index';
import {
  postNewRpsGameRequest,
  postNewRpsGameSucceeded,
  postNewRpsGameFaild,

  postNewHangmanGameRequest,
  postNewHangmanGameFaild,
} from '../../src/actions/index';

describe('Reducer', () => {
  it('sets request in flight when new rps game requested', () => {
    expect(
      reducer(undefined, postNewRpsGameRequest())
    ).to.eql(
      {
        '1': {
          'fetchGameState': {
            'inFlight': true
          },
          'fetchGuessState': {
            'inFlight': false
          },
          'id': 1,
          'moves': [],
          'type': 'rps'
        }
      }
    );
  });

  it('sets request not in flight when new rps game requested Succeeded', () => {
    const initialState = reducer(undefined, postNewRpsGameRequest());
    expect(
      reducer(initialState, postNewRpsGameSucceeded({id: 2, game: initialState[2]}))
    ).to.eql(
      {
        '2': {
          'fetchGameState': {
            'inFlight': false
          },
          'fetchGuessState': {
            'inFlight': false
          },
          'id': 2,
          'moves': [],
          'status': undefined,
          'type': 'rps',
          'won': undefined
        }
      }
    );
  });

  it('sets request not in flight when new rps game requested Fail', () => {
    const initialState = reducer(undefined, postNewRpsGameRequest());
    expect(
      reducer(initialState, postNewRpsGameFaild({id: 3, game: initialState[2]}))
    ).to.eql(
      {
        '3': {
          'fetchGameState': {
            'error': undefined,
            'inFlight': false
          },
          'fetchGuessState': {
            'inFlight': false
          },
          'id': 3,
          'moves': [],
          'type': 'rps'
        }
      }
    );
  });

  it('sets request in flight when new hangman game requested', () => {
    expect(
      reducer(undefined, postNewHangmanGameRequest())
    ).to.eql(
      {
        '4': {
          'fetchGameState': {
            'inFlight': true
          },
          'fetchGuessState': {
            'inFlight': false
          },
          'id': 4,
          'type': 'hangman',
          'wordView': '',
          'wrongCounter': 0
        }
      }
    );
  });


  it('sets request not in flight when new hangman game requested Fail', () => {
    const initialState = reducer(undefined, postNewHangmanGameRequest());
    expect(
      reducer(initialState, postNewHangmanGameFaild({id: 5, game: initialState[2]}))
    ).to.eql(
      {
        '5': {
          'fetchGameState': {
            'error': undefined,
            'inFlight': false
          },
          'fetchGuessState': {
            'inFlight': false
          },
          'id': 5,
          'type': 'hangman',
          'wordView': '',
          'wrongCounter': 0
        }
      }
    );
  });
});
