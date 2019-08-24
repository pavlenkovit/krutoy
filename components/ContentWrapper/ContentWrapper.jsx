import React from 'react';
import PropTypes from 'prop-types';

import css from './ContentWrapper.module.scss';

const ContentWrapper = ({ content }) => {
  return (
    <div className={css.content} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

ContentWrapper.propTypes = {
  content: PropTypes.node,
};

export default ContentWrapper;
