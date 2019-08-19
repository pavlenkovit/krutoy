import { connect } from 'react-redux';
import { changeColor, changePage, changeModel, addToCart } from '../../store/actions';
import Model from './Model';

const actionCreators = { changeColor, changePage, changeModel, addToCart };

const mapStateToProps = (state) => {
  const { products } = state.cart;
  const { isMobile } = state.app;
  return { products, isMobile };
};

export default connect(mapStateToProps, actionCreators)(Model);
