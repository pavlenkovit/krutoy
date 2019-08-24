import React from 'react';
import PropTypes from 'prop-types';
import Item from './components/Item';

import css from './DropDownGroup.module.scss';

const DropDownGroup = ({ title, items }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
      {items.map((item, idx) => (
        <Item key={idx} question={item.question} content={item.answer} />
      ))}
    </div>
  );
};

DropDownGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default DropDownGroup;
