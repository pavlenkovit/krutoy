import React from 'react';
import PropTypes from 'prop-types';

import css from './Sidebar.module.scss';

const Sidebar = (props) => {
  const { children, title } = props;
  return (
    <aside className={css.container}>
      {title && <h3 className={css.title}>{title}</h3>}
      {children}
    </aside>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
};

export default Sidebar;
