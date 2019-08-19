import { connect } from 'react-redux';
import { checkIsMobile, onLoadApp } from '../../store/actions';

import Layout from './Layout';

const mapStateToProps = (state) => {
  const { color, cartMode } = state.app;
  return { color, cartMode };
};

const actionCreators = { checkIsMobile, onLoadApp };

export default connect(mapStateToProps, actionCreators)(Layout);
