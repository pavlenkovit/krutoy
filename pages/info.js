import React from 'react';
import Info from '../scenes/Info';

const InfoPage = ({ id }) => {
  return <Info id={id} />;
};

InfoPage.getInitialProps = async (context) => {
  const { query, req } = context;

  let id = '';
  if (query.id) { // переходы внутри сайта
    id = context.query.id;
  }
  if (req && req.params && req.params.id) { // прямой переход по ссылке
    id = req.params.slug;
  }

  return { id };
};

export default InfoPage;
