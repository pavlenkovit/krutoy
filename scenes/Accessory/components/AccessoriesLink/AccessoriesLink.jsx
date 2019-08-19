import React from 'react';
import Link from 'next/link';

import css from './AccessoriesLink.module.scss';

const AccessoriesLink = () => {
  return (
    <Link href="/accessories">
      <a className={css.accessoriesLink}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
          <g strokeWidth="4" stroke="#fff" fill="none" fillRule="evenodd" strokeLinecap="round">
            <path d="M2.31 2.31L25 25M24.69 2.31L2 25" />
          </g>
        </svg>
      </a>
    </Link>
  );
};

export default AccessoriesLink;
