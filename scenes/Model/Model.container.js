import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';
import Model from './Model';

const actionCreators = { addToCart };

const mapStateToProps = (state) => {
  const { products } = state.cart;
  const { isMobile } = state.app;
  return { products, isMobile };
};

export default connect(mapStateToProps, actionCreators)(Model);
