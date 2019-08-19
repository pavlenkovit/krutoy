import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import MainMenu from './MainMenu';
import { toggleMenu, closeMenu } from '../../../../store/actions';

const mapStateToProps = (state) => {
  const { isMobile, menuIsActive } = state.app;
  const { products } = state.cart;
  const count = products.reduce((accumulator, item) => accumulator + item.count, 0);

  return { count, isMobile, menuIsActive };
};

const actionCreators = { toggleMenu, closeMenu };

export default withRouter(connect(mapStateToProps, actionCreators)(MainMenu));
