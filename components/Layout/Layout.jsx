import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import cn from 'classnames';
import models from '../../constants/models';
import { CSSTransition } from 'react-transition-group';
import Header from '../Header';
import Footer from '../Footer';
import Loader from '../Loader';

import '../../style.scss';
import styles from './Layout.module.scss';

class Layout extends PureComponent {
  state = {
    isLoading: true,
    timeRuns: true,
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

    if (!(isLoading || timeRuns)) {
      onLoadApp();
    }
  }

  handleResize = () => {
    this.props.checkIsMobile(window.innerWidth <= 768);
  };

  render() {
    const { children, router: { route, query: { id } } } = this.props;
    const { isLoading, timeRuns } = this.state;
    const isCart = route === '/cart';

    let color = null;
    if (route === '/model') {
      color = models.find(model => model.id === id).color;
    }

    let background = color || '#B5BAC6';

    if (isCart) {
      background = '#E8EBEE';
    }

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
        <div className={cn(styles.container, { [styles.container_cart]: isCart })} style={{ background }}>
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
};

export default withRouter(Layout);
