import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MessageArea from '../../components/MessageArea';
import CustomHead from '../../components/CustomHead';

class FinalStep extends PureComponent {
  componentDidMount() {
    const { resetAll, changeStep } = this.props;
    resetAll();
    changeStep(1);
  }

  render() {
    return (
      <>
        <CustomHead
          title="Корзина"
          url="/cart"
        />
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
      </>
    );
  }
}

FinalStep.propTypes = {
  resetAll: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
};

export default FinalStep;
