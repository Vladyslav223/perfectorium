import { connect } from 'react-redux';
import Steps from './Steps';
import { onDispatch, onBack, onFinish, onReset } from '../../store/actions';

const mapDispatchToProps = {
  onDispatch, 
  onBack,
  onFinish,
  onReset,
};

export default connect(  
  null,
  mapDispatchToProps
)(Steps);


