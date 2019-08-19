import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SliderDnD from './components/SliderDnD';
import SocialNav from './components/SocialNav';

import css from './GalleryModel.module.scss';

class GalleryModel extends PureComponent {
  state = { activeItem: 0, src: '' };

  changeItem = index => () => {
    this.setState({ activeItem: index });
  };

  callImgPath = (src) => {
    this.setState({ src });
  };

  render() {
    const { gallery, gallery3d } = this.props;
    const { activeItem, src } = this.state;

    const mixGallery = [src].concat(gallery);

    const classesSlider = cn(css.main, css.mainSlider, {
      [css.hide]: activeItem !== 0,
    });

    const classesMain = cn(css.main, {
      [css.hide]: activeItem === 0,
    });

    return (
      <div className={css.container}>
        <div className={classesSlider}>
          <SliderDnD gallery3d={gallery3d} callImgPath={this.callImgPath} />
        </div>
        <div className={classesMain}>
          <img className={css.img} src={mixGallery[activeItem]} alt="" />
        </div>
        {false && (
        <div className={css.items}>
          {mixGallery.map((item, idx) => {
            const classesItem = cn(css.item, {
              [css.active]: idx === activeItem,
            });
            return (
              <div key={idx} className={css.col}>
                <div className={classesItem} onClick={this.changeItem(idx)}>
                  <img className={css.itemImg} src={item} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        )}
        <SocialNav />
      </div>
    );
  }
}

GalleryModel.propTypes = {
  gallery: PropTypes.array,
  gallery3d: PropTypes.array,
};

export default GalleryModel;
