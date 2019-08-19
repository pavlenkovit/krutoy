import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import SelectGroup from '../../../../../../components/SelectGroup';
import baseURL from '../../../../../../constants/baseURL';
import SelectSearchGroup from '../../../../../../components/SelectSearchGroup';
import Table from './components/Table';

import css from './Delivery.module.scss';
import InputGroup from '../../../../../../components/InputGroup';

class Delivery extends PureComponent {
  state = { city: '', index: '', cityInvalid: false, indexInvalid: false, cities: null, methods: [], isLoading: true, showTableSection: false };

  componentDidMount() {
    this.getCities();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.city !== this.state.city || prevState.index !== this.state.index) {
      this.validate();
    }
  }

  getCities = () => {
    axios.get(`${baseURL}/delivery/cities`)
      .then((res) => {
        this.setState({ cities: res.data });
      });
  };

  getData = () => {
    const { city, index } = this.state;
    const request = {
      packages: JSON.stringify([{ height: 15, length: 76, width: 30, weight: 5.5 }]),
      index,
      endCity: city,
    };
    this.setState({ isLoading: true, showTableSection: true });

    console.log(request, 'request');
    axios.post(`${baseURL}/delivery/price`, request).then((res) => {
      console.log(res, 'response');
      this.setState({ methods: res.data, isLoading: false });
    });
  };

  validate = () => {
    const { city, index } = this.state;

    this.setState({
      cityInvalid: /^\s*$/.test(city),
      indexInvalid: !/^\d{6}/gm.test(index),
    });
  }

  showTable = () => {
    const { city, index, cities } = this.state;
    this.validate();

    if ((Object.keys(cities).filter(key => cities[key].name === city).length > 0) && index) {
      this.getData();
    }
  };

  changeData = (val) => {
    this.setState(val);
  };

  render() {
    const { city, cityInvalid, cities, index, indexInvalid, isLoading, methods, showTableSection } = this.state;
    const filterCities = cities ? Object.keys(cities).map(key => cities[key].name).filter(item => item.toUpperCase().indexOf(city.toUpperCase()) !== -1) : [];

    return (
      <>
        <h1>Доставка</h1>
        <div className={css.textBlock}>
          <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
          <p>To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
          <p>Several types of goods are exempt from being returned. Perishable goods such as food cannot be returned.</p>
          <p>To complete your return, we require a receipt or proof of purchase.</p>
        </div>
        <div className={css.selectGroup}>
          <div className={css.label}>Выберите ваш город</div>
          <div className={css.select}>
            <SelectSearchGroup
              isInvalid={cityInvalid}
              name="city"
              activeItem={city}
              items={filterCities}
              changeData={this.changeData}
              white
            />
          </div>
        </div>
        <div className={css.selectGroup}>
          <div className={css.label}>Введите почтовый индекс</div>
          <div className={css.select}>
            <InputGroup
              invalid={indexInvalid}
              label="Почтовый индекс"
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
              name="index"
              value={index}
              isDarkPhone
              changeData={this.changeData}
            />
          </div>
        </div>
        <button onClick={this.showTable} className={css.button}>Показать</button>
        {showTableSection && <Table methods={methods} isLoading={isLoading} />}
        <h1>Возврат</h1>
        <div className={css.textBlock}>
          <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
          <p>To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
          <p>Several types of goods are exempt from being returned. Perishable goods such as food cannot be returned.</p>
          <p>To complete your return, we require a receipt or proof of purchase.</p>
        </div>
      </>
    );
  }
}

Delivery.propTypes = {
};

export default Delivery;
