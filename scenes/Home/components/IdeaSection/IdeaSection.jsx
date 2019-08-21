import React from 'react';
import Button from '../../../../components/Button';

import css from './IdeaSection.module.scss';

const IdeaSection = () => {
  return (
    <section className={css.container}>
      <article className={css.article}>
        <h2 className={css.title}>ИГРАЯ, ВЫРАСТАЕМ!</h2>
        <div className={css.content}>
          Правильно развиваться <br />ребенку помогают игрушки
        </div>
        <Button href="/idea">Идея проекта</Button>
      </article>
    </section>
  );
};

export default IdeaSection;
