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
      console.log('timeRuns');
      this.setState({ timeRuns: false });
    }, 1500);

    window.onload = () => {
      console.log('onload');
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
    const { children, router: { route, query } } = this.props;
    const { isLoading, timeRuns } = this.state;

    console.log(this.props.router);

    let id = query.id;
    let color = null;

    if (route === '/model/[id]') {
      color = models.find(model => model.id === id).color;
    }

    let background = color || '#B5BAC6';

    const isCart = route === '/cart/[step]';
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
