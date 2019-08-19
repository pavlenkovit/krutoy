import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './Idea.module.scss';

class Idea extends PureComponent {
  componentDidMount() {
    const { changePage } = this.props;
    changePage('/idea');
  }

  componentWillUnmount() {
    const { changePage } = this.props;
    changePage(null);
  }

  render() {
    return (
      <div className={css.main}>
        <section className={css.container}>
          <article className={css.article}>
            <h2 className={css.title}>ИГРАЯ, ВЫРАСТАЕМ!</h2>
            <div className={css.content}>
              Правильно развиваться <br />ребенку помогают игрушки
            </div>
          </article>
        </section>
        <section className={css.row}>
          <div className={css.col}>
            <img className={css.innerImg} src="/static/img/content/about_pic2.jpg" alt="" />
          </div>
          <div className={css.col}>
            <div className={css.rowReverse}>
              <div className={cn(css.colVertical, css.contentCenter)} style={{ background: '#B5BAC6' }}>
                <article className={cn(css.innerArticle, css.innerArticle_first)}>
                  KRUTOY — первый российский бренд, выпускающий игрушки из дерева для развития малышей,
                  основу которых составляют знакомые с детства образы.
                </article>
              </div>
              <div className={cn(css.colVertical, css.colVertical_empty)} style={{ background: '#82A7A6' }} />
            </div>
          </div>
        </section>
        <section className={css.row}>
          <div className={cn(css.col, css.contentCenter)} style={{ background: '#3D5467' }}>
            <article className={cn(css.innerArticle, css.innerArticle_list)}>
              <ul>
                <li>Создаются из экологичных материалов</li>
                <li>Продуманные и безопасные конструкции</li>
                <li>Подходят для тренировки моторики <br />и сенсорной интеграции</li>
                <li>Возможность кастомизации</li>
              </ul>
            </article>
          </div>
          <div className={css.col}>
            <img className={css.innerImg} src="/static/img/content/about_pic3.jpg" alt="" />
          </div>
        </section>
        <section className={css.row}>
          <div className={css.col}>
            <img className={css.innerImg} src="/static/img/content/about_detail_pic1.jpg" alt="" />
          </div>
          <div className={cn(css.col, css.contentCenter)} style={{ background: '#8693AB' }}>
            <article className={cn(css.innerArticle, css.innerArticle_3)}>
              KRUTOY — первый российский бренд, выпускающий игрушки из дерева для развития малышей,
              основу которых составляют знакомые с детства образы.
            </article>
          </div>
        </section>
        <section className={css.row}>
          <div className={css.col}>
            <img className={css.innerImg} src="/static/img/content/about_detail_pic2.jpg" alt="" />
          </div>
          <div className={css.col}>
            <img className={css.innerImg} src="/static/img/content/about_detail_pic3.jpg" alt="" />
          </div>
        </section>
        <section className={css.lastSection}>
          Кто сказал, что игрушки — это несерьёзно?
        </section>
      </div>
    );
  }
}

Idea.propTypes = {
  changePage: PropTypes.func,
};

export default Idea;
