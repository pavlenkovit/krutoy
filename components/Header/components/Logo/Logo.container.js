import { connect } from 'react-redux';
import { closeMenu } from '../../../../store/actions';

import Logo from './Logo';

const mapStateToProps = (state) => {
  const { cartMode, isMobile, menuIsActive } = state.app;
  return { cartMode, isMobile, menuIsActive };
};

const actionCreators = { closeMenu };

export default connect(mapStateToProps, actionCreators)(Logo);
