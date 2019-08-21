import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import InputGroup from '../../../../components/InputGroup';
import Button from '../../../../components/Button';
import FormGroup from '../FormGroup';
import SelectSearchGroup from '../../../../components/SelectSearchGroup';
import Router from 'next/router';

import css from './Form2.module.scss';

class Form2 extends PureComponent {
  state = {
    startValidate: false,
    emailInvalid: false,
    firstNameInvalid: false,
    lastNameInvalid: false,
    streetInvalid: false,
    cityInvalid: false,
    postcodeInvalid: false,
    telephoneInvalid: false,
  };

  componentDidUpdate(prevProps) {
    if (this.state.startValidate) {
      this.validate();
    }
  }

  validate = (callback) => {
    const { email, firstName, lastName, street, city, postcode, telephone, cities } = this.props;

    this.setState({
      emailInvalid: !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase()),
      firstNameInvalid: /^\s*$/.test(firstName),
      lastNameInvalid: /^\s*$/.test(lastName),
      streetInvalid: /^\s*$/.test(street),
      cityInvalid: Object.keys(cities).filter(key => cities[key].name === city).length === 0,
      postcodeInvalid: !/^\d{6}/gm.test(postcode),
      telephoneInvalid: !/^(\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2})$/gm.test(telephone),
    }, callback);
  };

  nextStep = (e) => {
    e.preventDefault();

    this.setState({ startValidate: true });

    this.validate(() => {
      const { emailInvalid, firstNameInvalid, lastNameInvalid, streetInvalid, cityInvalid, postcodeInvalid, telephoneInvalid } = this.state;
      if (!emailInvalid && !firstNameInvalid && !lastNameInvalid && !streetInvalid && !cityInvalid && !postcodeInvalid && !telephoneInvalid) {
        this.props.changeStep(3);
        Router.push('/cart?step=3', '/cart/3').then(() => window.scrollTo(0, 0));
      }
    });
  };

  render() {
    const { email, firstName, lastName, street, city, changeData, postcode, telephone, cities } = this.props;
    const { emailInvalid, firstNameInvalid, lastNameInvalid, streetInvalid, cityInvalid, postcodeInvalid, telephoneInvalid } = this.state;

    const filterCities = cities ? Object.keys(cities).map(key => cities[key].name).filter(item => item.toUpperCase().indexOf(city.toUpperCase()) !== -1) : [];

    return (
      <form action="" onSubmit={this.nextStep}>
        <FormGroup title="Контактная информация">
          <InputGroup invalid={emailInvalid} label="Ваш e-mail" name="email" value={email} changeData={changeData} />
          <InputGroup invalid={firstNameInvalid} label="Ваше имя" name="firstName" value={firstName} changeData={changeData} />
          <InputGroup invalid={lastNameInvalid} label="Ваша фамилия" name="lastName" value={lastName} changeData={changeData} />
        </FormGroup>
        <FormGroup title="Адрес доставки">
          <InputGroup invalid={streetInvalid} label="Улица, номер дома" name="street" value={street} changeData={changeData} />
        </FormGroup>
        <FormGroup title="Город,  населенный пункт">
          <SelectSearchGroup
            isInvalid={cityInvalid}
            name="city"
            activeItem={city}
            items={filterCities}
            changeData={changeData}
          />
        </FormGroup>
        <div className={css.rowForm}>
          <div className={css.colForm}>
            <FormGroup title="">
              <InputGroup
                invalid={postcodeInvalid}
                label="Почтовый индекс"
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                name="postcode"
                value={postcode}
                changeData={changeData}
              />
            </FormGroup>
          </div>
          <div className={css.colForm}>
            <FormGroup title="">
              <InputGroup
                invalid={telephoneInvalid}
                label="Телефон"
                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                name="telephone"
                value={telephone}
                changeData={changeData}
              />
            </FormGroup>
          </div>
        </div>
        <footer className={css.footer}>
          <div className={css.footerInner}>
            <Link href="/cart?step=1" as="/cart/1">
              <a className={css.backButton}>
                Назад
              </a>
            </Link>
            <Button submit>Оформить <br />доставку</Button>
          </div>
        </footer>
      </form>
    );
  }
}

Form2.propTypes = {
  changeStep: PropTypes.func.isRequired,
  changeData: PropTypes.func.isRequired,
  cities: PropTypes.object,
};

export default Form2;
