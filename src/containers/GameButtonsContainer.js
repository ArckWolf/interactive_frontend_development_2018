import {connect} from 'react-redux';
import CreateGameButtons from '../components/CreateGameButtons';
import {createGameRequested} from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createGame: (type) => {
    dispatch(createGameRequested(type));
    ownProps.history.push('/ongoingGames');
  }
});

const mapStateToProps = ({gameReducer, loginReducer}) => ({
  createRequestInFlight: gameReducer.createGameRequestInFlight,
  playerId: loginReducer.playerId,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameButtons);
