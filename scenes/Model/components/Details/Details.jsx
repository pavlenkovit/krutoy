import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SizesIcon from '../../../../icons/SizesIcon';
import WeightIcon from '../../../../icons/WeightIcon';
import MaterialIcon from '../../../../icons/MaterialtIcon';
import KeyIcon from '../../../../icons/KeyIcon';
import DetailsIcon from '../../../../icons/DetailsIcon';

import css from './Details.module.scss';

class Details extends PureComponent {

  renderCell = (type) => {
    const { properties } = this.props;
    const { weight, sizes, material, details } = properties;

    let innerContent = null;

    switch (type) {
      case 'weight':
        innerContent = (
          <>
            <WeightIcon customClass={cn(css.icon, css.icon_weight)} />
            <span>{weight}</span>
          </>
        );
        break;
      case 'sizes':
        innerContent = (
          <>
            <SizesIcon customClass={cn(css.icon, css.icon_sizes)} />
            <span>{sizes}</span>
          </>
        );
        break;
      case 'material':
        innerContent = (
          <>
            <MaterialIcon customClass={cn(css.icon, css.icon_material)} />
            <span>{material}</span>
          </>
        );
        break;
      case 'details':
        innerContent = (
          <>
            <DetailsIcon customClass={cn(css.icon, css.icon_details)} />
            <span>{details} деталей</span>
          </>
        );
        break;
      case 'key':
        innerContent = (
          <>
            <KeyIcon customClass={cn(css.icon, css.icon_key)} />
            <span>ключ в&nbsp;комплекте</span>
          </>
        );
        break;
    }

    return (
      <td>
        <div className={css.item}>
          {innerContent}
        </div>
      </td>
    );
  };

  render() {
    const { properties: { key }, isMobile } = this.props;

    if (isMobile) {
      return (
        <div className={css.container}>
          <table className={css.table}>
            <tbody>
              <tr>
                {this.renderCell('weight')}
                {this.renderCell('sizes')}
              </tr>
            </tbody>
          </table>
          <table className={css.table}>
            <tbody>
              <tr>
                {this.renderCell('material')}
                {key && this.renderCell('key')}
              </tr>
            </tbody>
          </table>
          <table className={css.table}>
            <tbody>
              <tr>
                {this.renderCell('details')}
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className={css.container}>
        <table className={css.table}>
          <tbody>
            <tr>
              {this.renderCell('weight')}
              {this.renderCell('sizes')}
              {this.renderCell('material')}
            </tr>
          </tbody>
        </table>
        <table className={css.table}>
          <tbody>
            <tr>
              {key && this.renderCell('key')}
              {this.renderCell('details')}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Details.propTypes = {
  properties: PropTypes.object,
  isMobile: PropTypes.bool,
};

export default Details;
