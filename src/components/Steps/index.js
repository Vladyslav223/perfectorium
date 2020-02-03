import { connect } from 'react-redux';
import Steps from './Steps';
import { onDispatch } from '../../store/actions';

const mapStateToProps = state => ({
  data1: "tra",
});

const mapDispatchToProps = dispatch => ({
  onDispatch: () => dispatch(onDispatch()),
});

export default connect(  
  mapStateToProps,
  mapDispatchToProps
)(Steps);


