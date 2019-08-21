import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './Gallery.module.scss';

const Gallery = ({ items, img }) => {
  const [activeItem, changeItem] = useState(0);

  return (
    <div className={css.container}>
      <div className={css.main}>
        {/*<img className={css.img} src={items[activeItem]} alt="" />*/}
        <img className={css.img} src={img} alt="" />
      </div>
      {false && (
      <div className={css.items}>
        {items.map((item, idx) => {
          const classesItem = cn(css.item, {
            [css.active]: idx === activeItem,
          });
          return (
            <div key={idx} className={css.col}>
              <div className={classesItem} onClick={() => changeItem(idx)}>
                <img className={css.itemImg} src={item} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}

Gallery.propTypes = {
  items: PropTypes.array,
};

export default Gallery;
