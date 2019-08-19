import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ApplePayIcon from '../../../../icons/ApplePayIcon';
import GooglePayIcon from '../../../../icons/GooglePayIcon';
import VisaIcon from '../../../../icons/VisaIcon';
import MasterCardIcon from '../../../../icons/MasterCardIcon';

import css from './PayMethods.module.scss';

const PayMethods = (props) => {
  const { cartMode } = props;
  const color = cartMode ? '#9faeb9' : '#fff';
  return (
    <div className={css.container}>
      <div className={cn(css.item, css.applePay)}>
        <ApplePayIcon color={color} />
      </div>
      <div className={cn(css.item, css.googlePay)}>
        <GooglePayIcon color={color} />
      </div>
      <div className={cn(css.item, css.visa)}>
        <VisaIcon color={color} />
      </div>
      <div className={cn(css.item, css.masterCard)}>
        <MasterCardIcon color={color} />
      </div>
    </div>
  );
};

PayMethods.propTypes = {
  cartMode: PropTypes.bool.isRequired,
};

export default PayMethods;
