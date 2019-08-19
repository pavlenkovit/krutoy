import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import css from './PrivacyPolicy.module.scss';

class PrivacyPolicy extends PureComponent {
  render() {
    return (
      <>
        <h1>Политика конфиденциальности</h1>
        <div className={css.textBlock}>
          <p>Laborum neque quis quod voluptas voluptates. Corporis cum expedita illo labore laboriosam, sint. Consequuntur facilis fugiat iste libero quia quis quisquam voluptate.</p>
          <p>Accusamus amet atque, beatae enim expedita hic id, libero quasi reprehenderit repudiandae similique tempora unde. Aliquam aliquid maxime nam saepe veritatis vitae.</p>
        </div>
      </>
    );
  }
}

PrivacyPolicy.propTypes = {
};

export default PrivacyPolicy;
