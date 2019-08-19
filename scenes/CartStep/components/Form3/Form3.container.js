import { connect } from 'react-redux';
import { changeData, changeStep } from '../../../../store/actions';
import Form3 from './Form3';

const mapStateToProps = (state) => {
  return { ...state.cart };
};

const actionCreators = { changeData, changeStep };

export default connect(mapStateToProps, actionCreators)(Form3);
