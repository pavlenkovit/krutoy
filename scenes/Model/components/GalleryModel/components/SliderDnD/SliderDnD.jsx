import React, { PureComponent, createRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './SliderDnD.module.scss';

class SliderDnD extends PureComponent {
  constructor(props) {
    super(props);

    this.container = createRef();
    this.slider = createRef();

    this.xStart = 0;
    this.xLast = 0;

    this.state = {
      allowDrag: false,
      drag: false,
      x: 0,
      k: 0, // [0, 1]
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMove);
    document.addEventListener('touchmove', this.handleMove);

    document.addEventListener('mouseup', this.endMove);
    document.addEventListener('touchend', this.endMove);

    this.autoMove();
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMove);
    document.removeEventListener('touchmove', this.handleMove);

    document.removeEventListener('mouseup', this.endMove);
    document.removeEventListener('touchend', this.endMove);
  }

  autoMove = () => {
    const containerWidth = this.container.current.offsetWidth;

    function animate(options) {
      const start = performance.now();

      requestAnimationFrame(animate = (time) => {
        // timeFraction от 0 до 1
        let timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        // текущее состояние анимации
        const progress = options.timing(timeFraction);

        options.draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        } else {
          options.callback();
        }
      });
    }

    animate({
      duration: 750,
      timing: (progress) => {
        return Math.pow(progress, 0.75);
      },
      draw: (progress) => {
        const k = progress * 0.25;
        const x = containerWidth * k;
        this.setState({ x, k });
      },
      callback: () => {
        this.xLast = this.state.x;
        this.setState({ allowDrag: true });
      },
    });
  };

  handleMove = (e) => {
    if (!this.state.drag) {
      return false;
    }

    const containerWidth = this.container.current.offsetWidth;
    const xCurrent = e.touches ? e.touches[0].clientX : e.clientX;
    const x = this.xLast + xCurrent - this.xStart;
    const k = x / containerWidth;
    this.setState({ x, k });
  };

  startMove = (e) => {
    if (!this.state.allowDrag) return;
    this.xStart = e.touches ? e.touches[0].clientX : e.clientX;
    this.setState({ drag: true });
  };

  endMove = () => {
    this.setState({ drag: false }, () => {
      this.xLast = this.state.x;
    });
  };

  render() {
    const { k } = this.state;
    const { gallery3d } = this.props;

    return (
      <div
        ref={this.container}
        className={styles.container}
      >
        <div
          className={styles.mask}
          onMouseDown={this.startMove}
          onTouchStart={this.startMove}
          onMouseUp={this.endMove}
          onTouchEnd={this.endMove}
        />
        <div className={styles.imgMask} />
        {gallery3d.map((src, idx) => {
          const activeIndex = +(Math.abs(k - Math.floor(k)) * 89).toFixed();
          const classesImage = cn(styles.img, {
            [styles.show]: idx === activeIndex,
          });
          if (idx === activeIndex) {
            this.props.callImgPath(src);
          }
          return (
            <img key={idx} className={classesImage} src={src} alt="" />
          );
        })}
        <svg className={styles.svgImg} viewBox="0 0 598 47">
          <path d="M100.425 5.698C38.295 10.053 1.422 16.373 1.422 22.623c0 5.794 31.975 11.721 86.821 16.02 55.511 4.353 130.58 6.842 210.679 6.842 80.098 0 155.168-2.49 210.679-6.841 54.846-4.3 86.821-10.227 86.821-16.021 0-6.24-36.757-12.55-98.715-16.904l-.27 3.99-8.676-5.097L498.044.73l-.27 3.992c63.398 4.454 99.648 10.68 99.648 17.902 0 6.766-31.54 12.612-87.743 17.018-55.54 4.354-130.634 6.844-210.757 6.844-80.123 0-155.218-2.49-210.757-6.844C31.961 35.235.422 29.389.422 22.623c0-7.233 36.365-13.468 99.935-17.922L100.09.708l9.282 3.886-8.678 5.094-.268-3.99z" fill="#FFF" fillRule="nonzero" opacity=".5" />
        </svg>
        <div className={styles.text}>Посмотрите на качалку со всех сторон</div>
      </div>

    );
  }
}

SliderDnD.propTypes = {
  callImgPath: PropTypes.func,
  gallery3d: PropTypes.array,
};

export default SliderDnD;
