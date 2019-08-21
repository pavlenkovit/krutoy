import React from 'react';
import CustomHead from '../../../../../../components/CustomHead';

import css from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <CustomHead
        title="Политика конфиденциальности"
        url="/info/privacy-policy"
      />
      <h1>Политика конфиденциальности</h1>
      <div className={css.textBlock}>
        <p>Laborum neque quis quod voluptas voluptates. Corporis cum expedita illo labore laboriosam, sint. Consequuntur facilis fugiat iste libero quia quis quisquam voluptate.</p>
        <p>Accusamus amet atque, beatae enim expedita hic id, libero quasi reprehenderit repudiandae similique tempora unde. Aliquam aliquid maxime nam saepe veritatis vitae.</p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
