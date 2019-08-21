import React from 'react';
import Info from '../scenes/Info';

const InfoPage = ({ id }) => {
  return <Info id={id} />;
};

InfoPage.getInitialProps = async (context) => {
  const { id } = context.query;
  return { id };
};

export default InfoPage;
