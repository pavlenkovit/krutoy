import React from 'react';
import fetch from 'isomorphic-unfetch';

import Accessories from '../scenes/Accessories';
import baseURL from '../constants/baseURL';

const AccessoriesPage = ({ accessories }) => {
  return <Accessories accessories={accessories} />;
};

AccessoriesPage.getInitialProps = async () => {
  const res = await fetch(`${baseURL}/accessories`);
  const data = await res.json();
  return { accessories: data };
};

export default AccessoriesPage;
