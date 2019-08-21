import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Layout from '../components/Layout';
import createStore from '../store';

const store = createStore();

export default class MyApp extends App {
  componentDidMount() {
    window.addEventListener('resize', this.changeFontSize);
    this.changeFontSize();
  }

  changeFontSize = () => {
    const width = window.innerWidth;

    const height = window.innerHeight;
    const baseWidth = 1366;
    const baseHeight = 700;
    const baseFontSize = 16;
    const minWidth = 768;

    const fontWidth = baseFontSize + (width - baseWidth) / (baseWidth / baseFontSize);
    const fontHeight = baseFontSize + (height - baseHeight) / (baseHeight / baseFontSize);

    let fontSize = (fontWidth < fontHeight) ? fontWidth : fontHeight;

    if (width <= minWidth) {
      fontSize = 16;
    }

    document.querySelector('html').style.fontSize = `${fontSize}px`;
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Container>
          <Head>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/static/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#82a8a7" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Provider>
    )
  }
}
