import React from 'react';
import PropTypes from 'prop-types';
import Warranty from './scenes/Warranty';
import Construct from './scenes/Construct';
import Delivery from './scenes/Delivery';
import FAQ from './scenes/FAQ';
import TermsOfUse from './scenes/TermsOfUse';
import PrivacyPolicy from './scenes/PrivacyPolicy';

const ContentInfo = ({ id }) => {
  switch (id) {
    case 'warranty':
      return <Warranty />;
    case 'construct':
      return <Construct />;
    case 'faq':
      return <FAQ />;
    case 'terms-of-use':
      return <TermsOfUse />;
    case 'privacy-policy':
      return <PrivacyPolicy />;
    default:
      return <Delivery />;
  }
};

ContentInfo.propTypes = {
  id: PropTypes.string,
};

export default ContentInfo;
