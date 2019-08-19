import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Podium.module.scss';

class Podium extends PureComponent {
  constructor(props) {
    super(props);

    this.first = createRef();
    this.second = createRef();
    this.last = createRef();

    this.state = {
      firstWidth: 0,
      secondWidth: 0,
      lastWidth: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setWidth();
    }, 50);

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setWidth();
  };

  setWidth = () => {
    this.setState({
      firstWidth: this.first.current.offsetWidth,
      secondWidth: this.second.current.offsetWidth,
      lastWidth: this.last.current.offsetWidth,
    });
  };

  render() {
    const { firstWidth, secondWidth, lastWidth } = this.state;
    const { currentColors, children } = this.props;

    return (
      <div className={styles.podium}>
        <div className={styles.back} style={{ background: currentColors.back }} />
        <div ref={this.last} className={cn(styles.block, styles.last)} style={{ background: currentColors.last }}>
          <div className={styles.inner} style={{ borderLeft: `${lastWidth}px solid ${currentColors.last}` }} />
        </div>
        <div ref={this.second} className={cn(styles.block, styles.second)} style={{ background: currentColors.second }}>
          <div className={styles.inner} style={{ borderLeft: `${secondWidth}px solid ${currentColors.second}` }} />
        </div>
        <div ref={this.first} className={cn(styles.block, styles.first)} style={{ background: currentColors.first }}>
          <div className={styles.inner} style={{ borderLeft: `${firstWidth}px solid ${currentColors.first}` }} />
        </div>
        <div className={cn(styles.block, styles.center)} style={{ background: currentColors.center }}>
          {children}
        </div>
        <div className={cn(styles.block, styles.first)} style={{ background: currentColors.first }}>
          <div className={styles.inner} style={{ borderRight: `${firstWidth}px solid ${currentColors.first}` }} />
        </div>
        <div className={cn(styles.block, styles.second)} style={{ background: currentColors.second }}>
          <div className={styles.inner} style={{ borderRight: `${secondWidth}px solid ${currentColors.second}` }} />
        </div>
        <div className={cn(styles.block, styles.last)} style={{ background: currentColors.last }}>
          <div className={styles.inner} style={{ borderRight: `${lastWidth}px solid ${currentColors.last}` }} />
        </div>
      </div>
    );
  }
}

Podium.propTypes = {
  currentColors: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Podium;
