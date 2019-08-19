import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import MessageArea from '../../components/MessageArea';

class FinalStep extends PureComponent {
  componentDidMount() {
    const { changePage, resetAll, changeStep } = this.props;
    changePage('/cart');
    resetAll();
    changeStep(1);
  }

  componentWillUnmount() {
    const { changePage } = this.props;
    changePage(null);
  }

  render() {
    return (
      <MessageArea
        content={(
          <>
            Мы получили ваш заказ и приступили к его комплектации. <br />
            Все уведомления об изменениях статуса заказа будут приходить <br />
            по указанному при регистрации адресу e-mail. <br />
            Порадуем вас игрушками KRUTOY совсем скоро!
          </>
)}
        linkText="На главную"
      />
    );
  }
}

FinalStep.propTypes = {
  changePage: PropTypes.func.isRequired,
  resetAll: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
};

export default FinalStep;
