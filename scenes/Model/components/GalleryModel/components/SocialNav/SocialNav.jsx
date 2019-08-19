import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import FacebookSmallIcon from '../../../../../../icons/FacebookSmallIcon';
import OkIcon from '../../../../../../icons/OkIcon';
import VkontakteIcon from '../../../../../../icons/VkontakteIcon';

import css from './SocialNav.module.scss';

class SocialNav extends PureComponent {
  copyLink = () => {
    const copyText = document.querySelector('#myInput');
    copyText.select();
    document.execCommand('copy');
  };

  share = url => () => {
    window.open(url, '', 'width=626,height=436');
  };

  render() {
    return (
      <div className={css.container}>
        <div className={css.title}>Поделиться:</div>
        <div
          onClick={this.share(`https://www.facebook.com/sharer.php?u=${window.location.href}`)}
          className={css.link}
        >
          <div className={cn(css.icon, css.icon_facebook)}>
            <FacebookSmallIcon />
          </div>
        </div>
        <div
          onClick={this.share(`http://vk.com/share.php?url=${window.location.href}`)}
          className={css.link}
        >
          <div className={cn(css.icon, css.icon_vkontakte)}>
            <VkontakteIcon color="#fff" />
          </div>
        </div>
        <div
          onClick={this.share(`https://connect.ok.ru/offer?url=${window.location.href}`)}
          className={css.link}
        >
          <div className={cn(css.icon, css.icon_ok)}>
            <OkIcon />
          </div>
        </div>
        <div className={css.link} onClick={this.copyLink}>
          Ссылка
        </div>
        <input className={css.hideInput} id="myInput" type="text" value={window.location.href} />
      </div>
    );
  }
}

SocialNav.propTypes = {};

export default SocialNav;
