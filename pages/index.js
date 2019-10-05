import React from 'react';
import fetch from 'isomorphic-unfetch';
import baseURL from '../constants/baseURL';

import Home from '../scenes/Home';

const IndexPage = ({ model }) => {
  return <Home model={model} />;
};

IndexPage.getInitialProps = async (context) => {
  const { query: { model } } = context;
  const id = model ? model : 'moose';
  const res = await fetch(`${baseURL}/models/${id}`);
  const data = await res.json();
  return { model: data };
};

export default IndexPage;
