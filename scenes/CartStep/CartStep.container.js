import { connect } from 'react-redux';
import { changePage, changeData } from '../../store/actions';
import CartStep from './CartStep';

const mapStateToProps = (state) => {
  return { ...state.cart };
};

const actionCreators = { changePage, changeData };

export default connect(mapStateToProps, actionCreators)(CartStep);
