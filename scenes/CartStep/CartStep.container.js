import { connect } from 'react-redux';
import { changeData } from '../../store/actions';
import CartStep from './CartStep';

const mapStateToProps = (state) => {
  return { ...state.cart };
};

const actionCreators = { changeData };

export default connect(mapStateToProps, actionCreators)(CartStep);
