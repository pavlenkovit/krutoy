import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './Gallery.module.scss';

class Gallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 0,
    };
  }

  changeItem = index => () => {
    this.setState({ activeItem: index });
  };

  render() {
    const { items, img } = this.props;
    const { activeItem } = this.state;

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
                <div className={classesItem} onClick={this.changeItem(idx)}>
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
}

Gallery.propTypes = {
  items: PropTypes.array,
};

export default Gallery;
