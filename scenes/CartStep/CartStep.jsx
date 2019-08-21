import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import StepsNav from './components/StepsNav';
import SmallCart from './components/SmallCart';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import baseURL from '../../constants/baseURL';
import CustomHead from '../../components/CustomHead';
import Router from 'next/router';

import css from './CartStep.module.scss';

class CartStep extends PureComponent {
  state = { cities: null, showPrice: false };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.step === 3) {
      this.setState({ showPrice: true });
    }
  }

  getData = () => {
    axios.get(`${baseURL}/delivery/cities`)
      .then((res) => {
        this.setState({ cities: res.data });
      });
  };

  renderForm = (step) => {
    const { stepOpen, history } = this.props;

    if (stepOpen < step) {
      //Router.push('/cart?step=3', '/cart/3'); // TODO: настроить
    }

    switch (step) {
      case 2:
        return <Form2 cities={this.state.cities} />;
      case 3:
        return <Form3 />;
      case 4:
        return <Form4 history={history} />;
      default:
        return null;
    }
  };

  render() {
    const { step } = this.props;
    const { showPrice } = this.state;

    return (
      <div className={css.container}>
        <CustomHead
          title="Корзина"
          url="/cart"
        />
        <StepsNav step={step} />
        <div className={css.row}>
          <div className={css.formWrap}>
            <div className={css.formContainer}>
              {this.renderForm(step)}
            </div>
          </div>
          <div className={css.cartWrap}>
            <SmallCart showPrice={showPrice} />
          </div>
        </div>
      </div>
    );
  }
}

CartStep.propTypes = {
  step: PropTypes.number.isRequired,
};

export default CartStep;
