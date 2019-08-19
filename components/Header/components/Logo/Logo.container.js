import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { closeMenu } from '../../../../store/actions';

import Logo from './Logo';

const mapStateToProps = (state) => {
  const { isMobile, menuIsActive } = state.app;
  return { isMobile, menuIsActive };
};

const actionCreators = { closeMenu };

export default withRouter(connect(mapStateToProps, actionCreators)(Logo));
