import React from 'react';
import Link from 'next/link';

import css from './MessageArea.module.scss';

const MessageArea = ({ content, linkText }) => {
  return (
    <div className={css.container}>
      <div className={css.message}>
        <div className={css.text}>{content}</div>
        <Link href="/">
          <a className={css.link}>{linkText}</a>
        </Link>
      </div>
    </div>
  );
};

export default MessageArea;
