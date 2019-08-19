import React from 'react';
import PropTypes from 'prop-types';
import KrikdesignIcon from '../../../../icons/KrikdesignIcon';

import css from './Info.module.scss';

const Info = (props) => {
  const { cartMode } = props;
  const color = cartMode ? '#9faeb9' : '#fff';

  return (
    <div className={css.container}>
      <span className={css.text}>© 2019. Все права защищены. <br className={css.mobileBlock} />Сайт разработан</span>
      <a href="https://krik.design" target="_blank" rel="noopener noreferrer" className={css.logo}>
        <KrikdesignIcon color={color} />
      </a>
    </div>
  );
};

Info.propTypes = {
  cartMode: PropTypes.bool.isRequired,
};

export default Info;
