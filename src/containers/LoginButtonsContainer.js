import {connect} from 'react-redux';
import CreateLoginButtons from '../components/CreateLoginButtons';
import {logInRequested, logOutRequested} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  loginUser: (type) => dispatch(logInRequested(type)),
  logOutUser: () => dispatch(logOutRequested())
});

const mapStateToProps = ({logInRequestInFlight, logOutRequestInFlight, playerId, error}) => ({
  logInRequestInFlight: logInRequestInFlight,
  logOutRequestInFlight: logOutRequestInFlight,
  playerId: playerId,
  error: error
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateLoginButtons);
