import React, { Component } from 'react';
import Preloader from '../Preloader';

import css from './Loader.module.scss';

const models = ['#AAC3BF', '#97b5c5', '#95be9e', '#c9b1bd', '#e6af7a', '#d5a29c', '#82a7a6'];

class Loader extends Component {
  state = { indexBg: 0 };
  timer = null;

  componentDidMount() {
    const lengthModels = models.length;

    this.timer = setInterval(() => {
      this.setState((prevState) => {
        const indexBg = prevState.indexBg < lengthModels - 1 ? prevState.indexBg + 1 : 0;
        return { indexBg };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { indexBg } = this.state;
    return (
      <div className={css.container} style={{ background: models[indexBg] }}>
        <Preloader color="#fff" />
      </div>
    );
  }
}

export default Loader;
