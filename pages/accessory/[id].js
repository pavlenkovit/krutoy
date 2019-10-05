import React from 'react';
import fetch from 'isomorphic-unfetch';

import Accessory from '../../scenes/Accessory';
import baseURL from '../../constants/baseURL';

const AccessoryPage = ({ accessory }) => {
  return <Accessory accessory={accessory} />;
};

AccessoryPage.getInitialProps = async (context) => {
  const { query: { id } } = context;
  const res = await fetch(`${baseURL}/accessories/${id}`);
  const data = await res.json();
  return { accessory: data };
};

export default AccessoryPage;
