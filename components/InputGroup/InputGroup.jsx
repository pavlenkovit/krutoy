import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import cn from 'classnames';

import css from './InputGroup.module.scss';

class InputGroup extends PureComponent {
  onChange = (event) => {
    const { changeData, name } = this.props;
    changeData({ [name]: event.target.value });
  };

  render() {
    const { label, value, invalid, mask, isDarkPhone } = this.props;

    const classesGroup = cn(css.inputGroup, {
      [css.active]: value !== '',
    });

    const classesInput = cn(css.input, {
      [css.invalid]: invalid,
      [css.dark]: isDarkPhone,
    });

    return (
      <div className={classesGroup}>
        <MaskedInput
          mask={mask}
          value={value}
          className={classesInput}
          onChange={this.onChange}
        />
        <div className={css.label}>{label}</div>
      </div>
    );
  }
}

InputGroup.defaultProps = {
  invalid: false,
  mask: false,
};

InputGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  changeData: PropTypes.func,
  invalid: PropTypes.bool,
  isDarkPhone: PropTypes.bool,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default InputGroup;
