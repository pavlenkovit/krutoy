import { connect } from 'react-redux';
import { changePage } from '../../store/actions';
import Idea from './Idea';

const actionCreators = { changePage };

export default connect(undefined, actionCreators)(Idea);
