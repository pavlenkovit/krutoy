import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const CustomHead = (props) => {
  const {
    title = 'ИГРАЯ, ВЫРАСТАЕМ!',
    description = 'Кто сказал, что игрушки — это несерьёзно?',
    imgKey = 'all',
    url = '',
  } = props;

  return (
    <Head>
      <title key="title">{title && `${title} | `}KRUTOY</title>
      <meta key="meta-image" property="og:image" content={`/static/img/share/KRUTOY-PromoSite-Promo-${imgKey}-Share.jpg`} />
      <meta key="meta-url" property="og:url" content={`https://krutoy.store${url}`} />
      <meta key="meta-title" property="og:title" content={title} />
      <meta key="meta-og-title" property="og:description" content={description} />
      <meta key="meta-description" name="description" content={description} />
    </Head>
  );
};

CustomHead.propTypes = {
  title: PropTypes.string,
  imgKey: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default CustomHead;
