import React from 'react';
import fetch from 'isomorphic-unfetch';

import Model from '../scenes/Model';
import baseURL from '../constants/baseURL';

const ModelPage = ({ model }) => {
  return <Model model={model} />;
};

ModelPage.getInitialProps = async (context) => {
  const { query, req } = context;

  let id = '';
  if (query.id) { // переходы внутри сайта
    id = context.query.id;
  }
  if (req && req.params && req.params.id) { // прямой переход по ссылке
    id = req.params.id;
  }

  const res = await fetch(`${baseURL}/models/${id}`);
  const model = await res.json();
  return { model };
};

export default ModelPage;
