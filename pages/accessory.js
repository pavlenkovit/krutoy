import React from 'react';
import fetch from 'isomorphic-unfetch';

import Accessory from '../scenes/Accessory';
import baseURL from '../constants/baseURL';

const AccessoryPage = (props) => {
  const { accessory } = props;
  return <Accessory accessory={accessory} />;
};

AccessoryPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${baseURL}/accessories/${id}`);
  const data = await res.json();
  return { accessory: data };
};

export default AccessoryPage;
