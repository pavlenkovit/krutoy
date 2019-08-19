import { connect } from 'react-redux';
import { changeData } from '../../../../store/actions';
import Form4 from './Form4';

const mapStateToProps = (state) => {
  return { ...state.cart };
};

const actionCreators = { changeData };

export default connect(mapStateToProps, actionCreators)(Form4);
