import React from 'react';
import PropTypes from 'prop-types';

import css from './DeleteButton.module.scss';

const DeleteButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.button}>
      Удалить
    </button>
  );
};

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
};

export default DeleteButton;
