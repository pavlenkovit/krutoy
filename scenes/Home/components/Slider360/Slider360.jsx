import React, { PureComponent, createRef } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';

import priceFormat from '../../../../utils/priceFormat';
import Preloader from '../../../../components/Preloader';

import models from '../../../../constants/models';

import styles from './Slider360.module.scss';

class Slider360 extends PureComponent {
  constructor(props) {
    super(props);

    this.container = createRef();
    this.slider = createRef();

    this.xStart = 0;
    this.xLast = 0;

    this.state = {
      drag: false,
      x: 0,
      k: 0, // [0, 1]
      isLoading: true,
      images: [],
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMove);
    document.addEventListener('touchmove', this.handleMove);

    document.addEventListener('mouseup', this.endMove);
    document.addEventListener('touchend', this.endMove);

    this.setStartPosition();

    setTimeout(() => {
      this.setState({ showing: true });
    }, 5000);

    this.loadImages(this.props.gallery3d);
  }

  componentDidUpdate(prevProps) {
    const { id, gallery3d } = this.props;
    if (id !== prevProps.id) {
      this.setState({ isLoading: true });
      this.setStartPosition();
      this.loadImages(gallery3d);
    }
  }

  setStartPosition = () => {
    const k = 0.86;
    const containerWidth = this.container.current.offsetWidth;
    const x = containerWidth * 0.86;
    this.xLast = x;

    this.setState({ k, x });
  };

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMove);
    document.removeEventListener('touchmove', this.handleMove);

    document.removeEventListener('mouseup', this.endMove);
    document.removeEventListener('touchend', this.endMove);
  }

  loadImages = (gallery3d) => {
    let countLoaded = 0;

    gallery3d.forEach((src, idx, arr) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        this.setState(prevState => {
          return {
            ...prevState,
            images: prevState.images.concat([img]), // TODO: оптимизация изображений
          };
        });
        countLoaded++;
        if (countLoaded === arr.length) {
          this.setState({ isLoading: false });
        }
      };
    });
  };

  handleMove = (e) => {
    if (!this.state.drag) {
      return false;
    }

    const containerWidth = this.container.current.offsetWidth;
    const xCurrent = e.touches ? e.touches[0].clientX : e.clientX;

    let x = this.xLast + xCurrent - this.xStart;
    x = x < 0 ? 0 : x;
    x = x > containerWidth ? containerWidth : x;

    const k = x / containerWidth;
    this.setState({ x, k });
  };

  startMove = (e) => {
    this.xStart = e.touches ? e.touches[0].clientX : e.clientX;
    this.setState({ drag: true });
  };

  endMove = () => {
    this.setState({ drag: false }, () => {
      this.xLast = this.state.x;
    });
  };

  render() {
    const { k, isLoading, images } = this.state;
    const { id, gallery3d, name, price, isLoadingApp, isMobile } = this.props;

    const classesPreloader = cn(styles.preloader, {
      [styles.preloader_active]: isLoading,
    });

    const containerClasses = cn(styles.container, {
      [styles.container_active]: !isLoading,
    });

    const classesImgBlock = cn(styles.imgBlock, {
      [styles.imgBlock_active]: !isLoadingApp,
    });

    const classesLine = cn(styles.line, {
      [styles.line_active]: !isLoadingApp,
    });

    const classesSlider = cn(styles.slider, {
      [styles.slider_active]: !isLoadingApp,
    });

    const modelParam = models.find(model => model.id === id);
    const top = isMobile ? modelParam.topM : modelParam.top;

    return (
      <>
        <div className={classesPreloader}>
          <Preloader color="#fff" />
        </div>
        <div ref={this.container} className={containerClasses}>
          <div className={classesImgBlock}>
            <div className={styles.info} style={{ top: `${top}%` }}>
              <h2 className={styles.title}>Качалка {name}</h2>
              <div className={styles.price}>{priceFormat(price)}</div>
            </div>
            {gallery3d.map((src, idx) => {
              const activeIndex = +(Math.abs(k - Math.floor(k)) * 89).toFixed();
              const classesImage = cn(styles.img, {
                [styles.show]: idx === activeIndex,
              });
              return (
                <img key={idx} className={classesImage} src={src} alt="" />
              );
            })}
            <Link href={`/model?id=${id}`} as={`/model/${id}`}>
              <a className={styles.link} />
            </Link>
          </div>

          <div className={styles.lineContainer}>
            <svg className={classesLine} viewBox="0 0 504 44">
              <path d="M2.559 2.865C81.17 28.288 162.256 41 245.815 41c83.56 0 168.768-12.712 255.626-38.135" stroke="#FFF" strokeWidth="5" fill="none" fillRule="evenodd" opacity=".5" strokeDasharray="2,12" strokeLinecap="round" />
            </svg>
          </div>
          <div
            ref={this.slider}
            onMouseDown={this.startMove}
            onTouchStart={this.startMove}
            onMouseUp={this.endMove}
            onTouchEnd={this.endMove}
            style={{ transform: `rotate(${-k * 36 + 18}deg)` }}
            className={classesSlider}
          >
            <svg viewBox="0 0 100 100">
              <g fill="none" fillRule="evenodd" stroke="#FFF">
                <path d="M40.86 64.86c-.627-2.224-2.268-4.715-4.92-7.471-2.654-2.757-5.913-4.893-9.779-6.409 3.666-1.905 6.571-3.817 8.717-5.735 2.145-1.918 4.14-4.387 5.982-7.406M61.081 64.86c.627-2.224 2.267-4.715 4.92-7.471 2.654-2.757 5.913-4.893 9.779-6.409-3.666-1.905-6.572-3.817-8.717-5.735-2.146-1.918-4.14-4.387-5.982-7.406" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle strokeWidth="5" cx="49.641" cy="49.808" r="47.523" />
                <path d="M73.652 51.316H29.985" strokeWidth="6" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </>
    );
  }
}

Slider360.propTypes = {
  id: PropTypes.string,
  gallery3d: PropTypes.array,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default Slider360;
