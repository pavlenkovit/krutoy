import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import css from './Table.module.scss';

class Table extends PureComponent {
  render() {
    const { methods, isLoading } = this.props;
    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <table className={css.table}>
            <tr>
              <th>Компания</th>
              <th>Срок доставки</th>
              <th>Стоимость доставки</th>
            </tr>
            {isLoading && <tr><td colSpan={3}>Идет загрузка...</td></tr>}
            {!isLoading && methods.map((method) => {
              return (
                <tr>
                  <td><strong>{method.name}</strong> ({method.description})</td>
                  <td>{method.days} д.</td>
                  <td>{method.price}₽</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className={css.info}>При заказе учитывайте, что производство качалки может занять до 3-х рабочих дней.</div>
      </div>
    );
  }
}

Table.propTypes = {
  methods: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Table;
