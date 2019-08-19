import { connect } from 'react-redux';
import SmallCart from './SmallCart';

const mapStateToProps = (state) => {
  const { products, total, deliveryPrice } = state.cart;
  return { products, total, deliveryPrice };
};

export default connect(mapStateToProps)(SmallCart);
