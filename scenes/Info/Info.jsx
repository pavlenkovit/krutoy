import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from './components/NavMenu';
import ContentInfo from './components/ContentInfo';

import css from './Info.module.scss';

const Info = ({ id }) => {
  return (
    <div className={css.container}>
      <NavMenu activeItem={id} />
      <ContentInfo id={id} />
    </div>
  );
};

Info.propTypes = {
  id: PropTypes.string,
};

export default Info;
