import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import css from './DeleteButton.module.scss';

class DeleteButton extends PureComponent {
  render() {
    const { handleClick } = this.props;
    return (
      <button onClick={handleClick} className={css.button}>
        Удалить
      </button>
    );
  }
}

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
};

export default DeleteButton;
