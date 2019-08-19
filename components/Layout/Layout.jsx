import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../../style.scss';
import { CSSTransition } from 'react-transition-group';
import styles from './Layout.module.scss';

import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';

class Layout extends PureComponent {
  state = {
    // isLoading: true,
    // timeRuns: true,
    isLoading: false,
    timeRuns: false, // TODO: вернуть true
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    setTimeout(() => {
      this.setState({ timeRuns: false });
    }, 2500);

    window.onload = () => {
      this.setState({ isLoading: false });
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { timeRuns, isLoading } = this.state;
    const { onLoadApp } = this.props;

    window.scrollTo({ top: 0 });

    if (!(isLoading || timeRuns)) {
      onLoadApp();
    }
  }

  handleResize = () => {
    this.props.checkIsMobile(window.innerWidth <= 768);
  };

  render() {
    const { children, color, cartMode } = this.props;
    const { isLoading, timeRuns } = this.state;
    let background = color || '#B5BAC6';

    if (cartMode) {
      background = '#E8EBEE';
    }

    const layoutClasses = cn(styles.container, {
      [styles.container_cart]: cartMode,
    });

    return (
      <>
        <CSSTransition
          in={isLoading || timeRuns}
          timeout={200}
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
          }}
          unmountOnExit
        >
          <Loader />
        </CSSTransition>
        <div className={layoutClasses} style={{ background }}>
          <Header />
          <main className={styles.content}>
            {children}
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  checkIsMobile: PropTypes.func,
  color: PropTypes.string,
  cartMode: PropTypes.bool.isRequired,
};

export default Layout;
