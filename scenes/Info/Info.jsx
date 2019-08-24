import React from 'react';
import PropTypes from 'prop-types';

import NavMenu from './components/NavMenu';
import Construct from './scenes/Construct';
import Delivery from './scenes/Delivery';
import FAQ from './scenes/FAQ';
import TermsOfUse from './scenes/TermsOfUse';
import PrivacyPolicy from './scenes/PrivacyPolicy';
import Warranty from './scenes/Warranty';

import css from './Info.module.scss';

const Info = ({ id }) => {
  return (
    <div className={css.container}>
      <NavMenu activeItem={id} />
      {(() => {
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
      })()}
    </div>
  );
};

Info.propTypes = {
  id: PropTypes.string,
};

export default Info;
