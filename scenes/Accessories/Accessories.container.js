import { connect } from 'react-redux';
import { changePage } from '../../store/actions';
import Accessories from './Accessories';

const actionCreators = { changePage };

export default connect(undefined, actionCreators)(Accessories);
