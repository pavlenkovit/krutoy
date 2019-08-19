import { connect } from 'react-redux';
import { incrementProduct, decrementProduct, removeFromCart, changeStep } from '../../store/actions';
import Cart from './Cart';

const mapStateToProps = (state) => {
  const { products, total } = state.cart;
  const { isMobile } = state.app;
  return { products, total, isMobile };
};

const actionCreators = { changeStep, incrementProduct, decrementProduct, removeFromCart };

export default connect(mapStateToProps, actionCreators)(Cart);
