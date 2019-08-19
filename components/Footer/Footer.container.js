import { connect } from 'react-redux';

import Footer from './Footer';

const mapStateToProps = (state) => {
  const { cartMode, isMobile } = state.app;
  return { cartMode, isMobile };
};

export default connect(mapStateToProps)(Footer);
