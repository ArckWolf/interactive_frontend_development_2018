import {connect} from 'react-redux';
import Players from '../components/Players';
import {gameGuessRequested} from '../actions';

const mapStateToProps = ({players, playerId}) => ({
  players: Object.values(players).sort((id1, id2) => id1 - id2),
  playerId: playerId
});

const mapDispatchToProps = (dispatch) => ({
  onGuess: (gameId, guess) => dispatch(gameGuessRequested({gameId, guess}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
