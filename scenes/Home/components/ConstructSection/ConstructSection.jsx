import React from 'react';
import Button from '../../../../components/Button';

import css from './ConstructSection.module.scss';

const ConstructSection = () => {
  return (
    <section className={css.container}>
      <div className={css.leftCol} />
      <div className={css.rightCol}>
        <article className={css.article}>
          <div className={css.content}>
            Конструкция наших игрушек продумана до мелочей. Сборка не составит труда и не займет много времени. Руководствуясь проиллюстрированной инструкцией, это сможет сделать любой взрослый.
          </div>
          <Button href="/info/[id]" as="/info/construct">Собрать, легко!</Button>
        </article>
      </div>
    </section>
  );
};

export default ConstructSection;
