import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as axios from 'axios';
import Button from '../../../../components/Button';
import FormGroup from '../FormGroup';
import BackGroup from '../BackGroup';
import RadioSelectGroup from '../RadioSelectGroup';
import baseURL from '../../../../constants/baseURL';
import Router from 'next/router';

import css from './Form3.module.scss';

class Form3 extends PureComponent {
  state = {
    deliveryTypeInvalid: false,
    methods: [],
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    this.validate();
  }

  getData = () => {
    const { city, postcode, products } = this.props;
    const packages = [];
    products.forEach((product) => {
      if (product.packageSizes) {
        for (let i = 0; i < product.count; i++) {
          packages.push(product.packageSizes);
        }
      }
    });

    const request = {
      packages: JSON.stringify(packages),
      index: postcode,
      endCity: city,
    };
    console.log(request, 'request');
    axios.post(`${baseURL}/delivery/price`, request).then((res) => {
      console.log(res, 'response');
      this.setState({ methods: res.data });
    });
  };


  validate = (callback) => {
    const { deliveryType } = this.props;
    this.setState({
      deliveryTypeInvalid: !deliveryType,
    }, callback);
  };

  nextStep = (e) => {
    e.preventDefault();

    this.validate(() => {
      const { deliveryTypeInvalid } = this.state;
      if (!deliveryTypeInvalid) {
        this.props.changeStep(4);
        Router.push('/cart?step=4', '/cart/4').then(() => window.scrollTo(0, 0));
      }
    });
  };

  render() {
    const { email, street, city, changeData, deliveryType, postcode } = this.props;
    const { deliveryTypeInvalid, methods } = this.state;

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
                value: [postcode, city, street].filter(item => item).join(', '),
              },
            ]}
          />
        </FormGroup>
        <FormGroup title="Способ доставки">
          {methods.length > 0 ? (
            <RadioSelectGroup
              invalid={deliveryTypeInvalid}
              items={methods.map((method) => {
                const { name } = method;
                const description = method.description ? `. ${method.description}` : '';
                const days = method.days ? ` (${method.days} дня)` : '';
                const title = `${name}${description}${days}`;
                return {
                  id: title,
                  price: method.price,
                  title,
                };
              })}
              name="deliveryType"
              aliasName="deliveryTitle"
              otherName="deliveryPrice"
              activeItem={deliveryType}
              changeData={changeData}
            />
          ) : 'Идет загрузка...'}
        </FormGroup>
        <footer className={css.footer}>
          <div className={css.footerInner}>
            <Link href="/cart?step=2" as="/cart/2">
              <a className={css.backButton}>
                Назад
              </a>
            </Link>
            <Button submit>Оплатить</Button>
          </div>
        </footer>
      </form>
    );
  }
}

Form3.propTypes = {
  changeData: PropTypes.func.isRequired,
};

export default Form3;
