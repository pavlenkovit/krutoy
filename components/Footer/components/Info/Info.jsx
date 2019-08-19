import React from 'react';
import PropTypes from 'prop-types';
import KrikdesignIcon from '../../../../icons/KrikdesignIcon';

import css from './Info.module.scss';

const Info = (props) => {
  const { isCart } = props;
  const color = isCart ? '#9faeb9' : '#fff';

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
  isCart: PropTypes.bool.isRequired,
};

export default Info;
