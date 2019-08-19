import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import Footer from './Footer';

const mapStateToProps = (state) => {
  const { isMobile } = state.app;
  return { isMobile };
};

export default withRouter(connect(mapStateToProps)(Footer));
