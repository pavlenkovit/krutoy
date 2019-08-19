import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = (state) => {
  const { isMobile, isLoadingApp } = state.app;
  return { isMobile, isLoadingApp };
};

export default connect(mapStateToProps)(Home);
