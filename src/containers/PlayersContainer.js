import {connect} from 'react-redux';
import Players from '../components/Players';
import {gameGuessRequested} from '../actions';

const mapStateToProps = ({loginReducer}) => ({
  players: Object.values(loginReducer.players).sort((id1, id2) => id1 - id2),
  playerId: loginReducer.playerId
});

const mapDispatchToProps = (dispatch) => ({
  onGuess: (gameId, guess) => dispatch(gameGuessRequested({gameId, guess}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
