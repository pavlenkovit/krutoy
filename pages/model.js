import React from 'react';
import fetch from 'isomorphic-unfetch';

import Model from '../scenes/Model';
import baseURL from '../constants/baseURL';

const ModelPage = ({ model }) => {
  return <Model model={model} />;
};

ModelPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${baseURL}/models/${id}`);
  const data = await res.json();
  return { model: data };
};

export default ModelPage;
