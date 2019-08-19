import { connect } from 'react-redux';
import { checkIsMobile, onLoadApp } from '../../store/actions';

import Layout from './Layout';

const actionCreators = { checkIsMobile, onLoadApp };

export default connect(null, actionCreators)(Layout);
