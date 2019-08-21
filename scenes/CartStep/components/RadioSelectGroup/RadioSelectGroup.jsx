import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './RadioSelectGroup.module.scss';

class RadioSelectGroup extends PureComponent {
  onChange = item => () => {
    const { name, otherName, aliasName, changeData } = this.props;

    changeData({ [name]: item.id });

    if (aliasName) {
      changeData({ [aliasName]: item.title });
    }

    if (otherName) {
      changeData({ [otherName]: item.price });
    }
  };

  render() {
    const { items, activeItem, invalid } = this.props;

    return (
      <div className={cn(css.container, { [css.containerInvalid]: invalid })}>
        {items.map((item, idx) => {
          const classesItem = cn(css.item, {
            [css.itemActive]: activeItem === item.id,
          });

          return (
            <div key={idx} className={classesItem} onClick={this.onChange(item)}>
              <div className={css.button} />
              <div className={css.title}>{item.title}</div>
              {item.price && <div className={css.price}>{item.price}₽</div>}
            </div>
          );
        })}
      </div>
    );
  }
}

RadioSelectGroup.defaultProps = {
  invalid: false,
};

RadioSelectGroup.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired,
  changeData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  otherName: PropTypes.string,
  invalid: PropTypes.bool,
};

export default RadioSelectGroup;
