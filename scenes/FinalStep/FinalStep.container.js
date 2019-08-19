import { connect } from 'react-redux';
import { changePage, resetAll, changeStep } from '../../store/actions';
import FinalStep from './FinalStep';

const actionCreators = { changePage, resetAll, changeStep };

export default connect(undefined, actionCreators)(FinalStep);
