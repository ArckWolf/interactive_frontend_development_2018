import {connect} from 'react-redux';
import CreateLoginButtons from '../components/CreateLoginButtons';
import {logInRequested, logOutRequested} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  loginUser: (type) => dispatch(logInRequested(type)),
  logOutUser: () => dispatch(logOutRequested())
});

const mapStateToProps = ({loginReducer}) => ({
  logInRequestInFlight: loginReducer.logInRequestInFlight,
  logOutRequestInFlight: loginReducer.logOutRequestInFlight,
  playerId: loginReducer.playerId,
  error: loginReducer.error
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateLoginButtons);
