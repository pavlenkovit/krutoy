import { connect } from 'react-redux';
import { addToCart } from '../../../../../../store/actions';
import Product from './Product';

const actionCreators = { addToCart };

const mapStateToProps = (state) => {
  const { products } = state.cart;
  return { products };
};

export default connect(mapStateToProps, actionCreators)(Product);
