import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ModelLink from './components/ModelLink';

import menu from '../../../../constants/models';

import css from './ModelLinks.module.scss';

class ModelLinks extends PureComponent {
  state = { showSlider: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSlider: true,
      });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.id !== this.props.id) {
      this.goTo(prevProps.id);
    }
  }

  goTo = (prevId) => {
    if (this.slider) {
      const { id } = this.props;
      const nextIndex = menu.findIndex(item => item.id === id);
      const prevIndex = menu.findIndex(item => item.id === prevId);

      switch (true) {
        case prevIndex === 6 && nextIndex === 0:
          this.slider.slickNext();
          break;
        case prevIndex === 0 && nextIndex === 6:
          this.slider.slickPrev();
          break;
        case prevIndex === nextIndex - 1:
          this.slider.slickNext();
          break;
        case prevIndex === nextIndex + 1:
          this.slider.slickPrev();
          break;
        default:
          this.slider.slickGoTo(nextIndex);
      }
    }
  };

  render() {
    const { id } = this.props;
    const { showSlider } = this.state;

    const settings = {
      touchMove: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      draggable: false,
      arrows: false,
      initialSlide: menu.findIndex(item => item.id === id),
    };

    return showSlider && (
      <Slider
        className={css.slider}
        ref={slider => (this.slider = slider)}
        {...settings}
      >
        {menu.map((item, idx) => (
          <ModelLink selected={item.id === id} key={idx} id={item.id} title={item.title} />
        ))}
      </Slider>
    );
  }
}

ModelLinks.propTypes = {
  id: PropTypes.string,
};

export default ModelLinks;
