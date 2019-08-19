import React, { PureComponent } from 'react';

import css from './ConstructSection.module.scss';
import Button from '../../../../components/Button';

class ConstructSection extends PureComponent {
  render() {
    return (
      <section className={css.container}>
        <div className={css.leftCol} />
        <div className={css.rightCol}>
          <article className={css.article}>
            <div className={css.content}>
              Конструкция наших игрушек продумана до мелочей. Сборка не составит труда и не займет много времени. Руководствуясь проиллюстрированной инструкцией, это сможет сделать любой взрослый.
            </div>
            <Button href="/info/construct">Собрать, легко!</Button>
          </article>
        </div>
      </section>
    );
  }
}

ConstructSection.propTypes = {
};

export default ConstructSection;
