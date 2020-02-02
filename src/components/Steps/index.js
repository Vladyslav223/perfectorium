import { connect } from 'react-redux';
import Steps from './Steps';
import { onDispatch } from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onDispatch: () => dispatch(onDispatch()),
});

export default connect(  
  mapDispatchToProps
)(Steps);
