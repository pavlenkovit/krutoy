import React from 'react';
import Info from '../../scenes/Info';

const InfoPage = ({ id }) => {
  return <Info id={id} />;
};

InfoPage.getInitialProps = async (context) => {
  const { query: { id } } = context;
  return { id };
};

export default InfoPage;
