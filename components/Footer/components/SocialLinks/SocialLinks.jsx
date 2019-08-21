import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import css from './SocialLinks.module.scss';

import InstargamIcon from '../../../../icons/InstagramIcon';
import PinterestIcon from '../../../../icons/PinterestIcon';
import FacebookIcon from '../../../../icons/FacebookIcon';
import VkontakteIcon from '../../../../icons/VkontakteIcon';

const SocialLinks = ({ isCart }) => {
  const color = isCart ? '#9faeb9' : '#fff';

  return (
    <div className={css.container}>
      <a className={cn(css.link, css.instagram)} href="https://instagram.com" target="_blank">
        <InstargamIcon color={color} />
      </a>
      <a className={cn(css.link, css.facebook)} href="https://facebook.com" target="_blank">
        <FacebookIcon color={color} />
      </a>
      <a className={cn(css.link, css.vkontakte)} href="https://vk.com" target="_blank">
        <VkontakteIcon color={color} />
      </a>
      <a className={cn(css.link, css.link_disabled, css.pinterest)} target="_blank">
        <PinterestIcon color={color} />
      </a>
    </div>
  );
};

SocialLinks.propTypes = {
  isCart: PropTypes.bool.isRequired,
};

export default SocialLinks;
