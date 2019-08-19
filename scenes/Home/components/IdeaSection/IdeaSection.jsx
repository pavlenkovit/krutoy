import React, { PureComponent } from 'react';

import css from './IdeaSection.module.scss';
import Button from '../../../../components/Button';

class IdeaSection extends PureComponent {
  render() {
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
  }
}

IdeaSection.propTypes = {
};

export default IdeaSection;
