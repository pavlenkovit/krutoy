import { connect } from 'react-redux';
import { changeData, changeStep } from '../../../../store/actions';
import Form2 from './Form2';

const mapStateToProps = (state) => {
  return { ...state.cart };
};

const actionCreators = { changeData, changeStep };

export default connect(mapStateToProps, actionCreators)(Form2);
