import { connect } from 'react-redux';
import { resetAll, changeStep } from '../../store/actions';
import FinalStep from './FinalStep';

const actionCreators = { resetAll, changeStep };

export default connect(undefined, actionCreators)(FinalStep);
