import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';

import css from './ModelsNav.module.scss';
import models from '../../../../constants/models';

class ModelsNav extends PureComponent {
  render() {
    const { id } = this.props;
    const model = models.find(model => model.id === id);
    const modelIndex = models.findIndex(model => model.id === id);

    const prevIndex = modelIndex > 0 ? modelIndex - 1 : models.length - 1;
    const prevId = models[prevIndex].id;

    const nextIndex = modelIndex < models.length - 1 ? modelIndex + 1 : 0;
    const nextId = models[nextIndex].id;

    return (
      <div className={css.container}>
        <div className={css.inner}>
          <Link href={`/model/${prevId}`}>
            <a className={cn(css.button, css.prev)}>
              <div className={css.linkInner}>
                <svg className={css.arrow} viewBox="0 0 19 33">
                  <path d="M17.387 31.444c-.678-2.404-2.45-5.096-5.318-8.075C9.2 20.389 5.679 18.08 1.5 16.442c3.962-2.06 7.103-4.126 9.422-6.199 2.319-2.073 4.474-4.741 6.465-8.005" stroke="#FFF" strokeWidth="3" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </Link>
          <h1 className={css.title}>{model.title}</h1>
          <Link href={`/model/${nextId}`}>
            <a className={cn(css.button, css.next)}>
              <div className={css.linkInner}>
                <svg className={css.arrow} viewBox="0 0 19 33">
                  <path d="M17.387 31.444c-.678-2.404-2.45-5.096-5.318-8.075C9.2 20.389 5.679 18.08 1.5 16.442c3.962-2.06 7.103-4.126 9.422-6.199 2.319-2.073 4.474-4.741 6.465-8.005" stroke="#FFF" strokeWidth="3" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

ModelsNav.propTypes = {
  id: PropTypes.string,
};

export default ModelsNav;
