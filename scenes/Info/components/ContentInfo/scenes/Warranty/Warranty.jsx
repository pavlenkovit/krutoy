import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import css from './Warranty.module.scss';

class Warranty extends PureComponent {
  render() {
    return (
      <>
        <h1>Гарантия</h1>
        <div className={css.textBlock}>
          <p>Accusantium autem cupiditate debitis delectus, esse inventore itaque
            labore, omnis perferendis, quibusdam quidem quis sequi veniam vitae
            voluptates. Consequuntur deserunt mollitia voluptate.
          </p>
          <p>Ab aliquam aliquid amet, beatae blanditiis, culpa cumque error est, explicabo fuga nemo numquam officiis quia tempora vitae. Dolores porro sequi soluta?</p>
        </div>
      </>
    );
  }
}

Warranty.propTypes = {
};

export default Warranty;
