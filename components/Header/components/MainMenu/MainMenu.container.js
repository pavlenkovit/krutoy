import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import { toggleMenu, closeMenu } from '../../../../store/actions';

const mapStateToProps = (state) => {
  const { activePage, cartMode, activeModel, isMobile, menuIsActive } = state.app;
  const { products } = state.cart;
  const count = products.reduce((accumulator, item) => accumulator + item.count, 0);

  return { activePage, cartMode, count, activeModel, isMobile, menuIsActive };
};

const actionCreators = { toggleMenu, closeMenu };

export default connect(mapStateToProps, actionCreators)(MainMenu);
