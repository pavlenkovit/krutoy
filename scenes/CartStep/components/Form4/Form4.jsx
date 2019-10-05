import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';
import baseURL from '../../../../constants/baseURL';
import Button from '../../../../components/Button';
import FormGroup from '../FormGroup';
import BackGroup from '../BackGroup';
import RadioSelectGroup from '../RadioSelectGroup';
import Router from 'next/router';

import css from './Form4.module.scss';

class Form4 extends PureComponent {
  state = { paymentMethodInvalid: false };

  componentDidUpdate(prevProps) {
    this.validate();
  }

  validate = (callback) => {
    const { paymentMethod } = this.props;
    this.setState({
      paymentMethodInvalid: !paymentMethod,
    }, callback);
  };

  nextStep = (e) => {
    e.preventDefault();

    this.validate(() => {
      const { paymentMethodInvalid } = this.state;
      if (!paymentMethodInvalid) {

        Router.push('/cart/[step]', '/cart/5').then(() => window.scrollTo(0, 0));

        const { total, deliveryType, deliveryPrice, paymentMethod, email, firstName, lastName, street, city, postcode, telephone, products } = this.props;

        const orderList = products.map((item) => {
          const { dataId, name, price, type, count } = item;
          return {
            id: dataId,
            name,
            type,
            price,
            count,
          };
        });

        const request = {
          order_list: orderList,
          order_info: {
            name: firstName,
            second_name: lastName,
            phone: telephone,
            email,
            city,
            address: street,
            index: postcode,
          },
          order_list_cost: total,
          delivery_method: deliveryType,
          delivery_cost: deliveryPrice,
          payment_method: paymentMethod,
        };

        console.log(request, 'request');

        axios.post(`${baseURL}/orders/`, request)
          .then((response) => {
            console.log(response, 'response');
          }).catch((error) => {
            console.log(error, 'error');
          });
      }
    });
  };

  render() {
    const { email, street, city, changeData, deliveryTitle, postcode, paymentMethod } = this.props;
    const { paymentMethodInvalid } = this.state;

    return (
      <form action="" onSubmit={this.nextStep}>
        <FormGroup>
          <BackGroup
            items={[
              {
                name: 'Контакт',
                linkIndex: 2,
                value: email,
              },
              {
                name: 'Адрес',
                linkIndex: 2,
                value: [postcode,
                  //country, region,
                  city, street].filter(item => item).join(', '),
              },
              {
                name: 'Доставка',
                linkIndex: 3,
                value: deliveryTitle,
              },
            ]}
          />
        </FormGroup>
        <FormGroup title="Способ оплаты">
          <RadioSelectGroup
            invalid={paymentMethodInvalid}
            items={[
              // { id: 'card', title: 'Кредитная карта' },
              { id: 'cash', title: 'Наличные' },
            ]}
            name="paymentMethod"
            activeItem={paymentMethod}
            changeData={changeData}
          />
        </FormGroup>
        <footer className={css.footer}>
          <div className={css.footerInner}>
            <Link href="/cart/[step]" as="/cart/3">
              <a className={css.backButton}>
                Назад
              </a>
            </Link>
            <Button submit>Завершить</Button>
          </div>
        </footer>
      </form>
    );
  }
}

Form4.propTypes = {
  changeData: PropTypes.func.isRequired,
};

export default Form4;
