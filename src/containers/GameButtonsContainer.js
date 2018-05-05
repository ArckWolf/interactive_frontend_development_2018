import {connect} from 'react-redux';
import CreateGameButtons from '../components/CreateGameButtons';
import {createGameRequested} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  createGame: (type) => dispatch(createGameRequested(type))
});

const mapStateToProps = ({createGameRequestInFlight, playerId}) => ({
  createRequestInFlight: createGameRequestInFlight,
  playerId: playerId,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameButtons);
