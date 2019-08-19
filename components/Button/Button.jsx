import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';

import css from './Button.module.scss';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.container = createRef();

    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this.setState({
      width: this.container.current.clientWidth,
      height: this.container.current.clientHeight,
    });

    window.addEventListener('resize', this.handleResize);
    setTimeout(() => {
      this.handleResize();
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: this.container.current.clientWidth,
      height: this.container.current.clientHeight,
    });
  };

  getPath = (width, height) => {

    const indentFromCorner = height * 0.17;
    const indentFromSide = height * 0.25;

    const points = [
      { x: indentFromSide, y: 0 },
      { x: width - indentFromSide, y: 0 },
      { x: width, y: height / 2 },
      { x: width - indentFromSide, y: height },
      { x: indentFromSide, y: height },
      { x: 0, y: height / 2 },
    ];

    const point = index => `${points[index].x} ${points[index].y}`;

    const getPoint = (from, to) => {
      const start = points[from];
      const end = points[to];
      const rab = Math.sqrt((end.x - start.x) * (end.x - start.x) + (end.y - start.y) * (end.y - start.y));
      const k = indentFromCorner / rab;
      const p = {
        x: start.x + (end.x - start.x) * k,
        y: start.y + (end.y - start.y) * k,
      };
      return `${p.x} ${p.y}`;
    };

    return `M ${getPoint(0, 1)}
            L ${getPoint(1, 0)}
            Q ${point(1)}, ${getPoint(1, 2)}
            L ${getPoint(2, 1)}
            Q ${point(2)}, ${getPoint(2, 3)}
            L ${getPoint(3, 2)}
            Q ${point(3)}, ${getPoint(3, 4)}
            L ${getPoint(4, 3)}
            Q ${point(4)}, ${getPoint(4, 5)}
            L ${getPoint(5, 4)}
            Q ${point(5)}, ${getPoint(5, 0)}
            L ${getPoint(0, 5)}
            Q ${point(0)}, ${getPoint(0, 1)}`;
  };

  renderContent = () => {
    const { children, withBorder, w100, handleClick, submit } = this.props;
    const { width, height } = this.state;

    const classesContainer = cn(css.container, {
      [css.w100]: w100,
      [css.withBorder]: withBorder,
      [css.fill]: !withBorder,
    });

    const content = (
      <>
        {width > 0 && (
          <svg
            className={css.svg}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={this.getPath(width, height)} />
          </svg>
        )}
        <div className={css.content}>
          <span>{children}</span>
        </div>
      </>
    );

    if (submit) {
      return (
        <button type="submit" className={classesContainer} ref={this.container}>
          {content}
        </button>
      );
    }

    return (
      <div className={classesContainer} ref={this.container} onClick={handleClick}>
        {content}
      </div>
    );
  };

  render() {
    const { href, as } = this.props;

    if (!href) {
      return this.renderContent();
    }

    return (
      <Link href={href} as={as ? as : href}>
        <a className={css.link}>
          {this.renderContent()}
        </a>
      </Link>
    );
  }
}

Button.defaultProps = {
  withBorder: false,
  w100: false,
  submit: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  as: PropTypes.string,
  withBorder: PropTypes.bool,
  w100: PropTypes.bool,
  handleClick: PropTypes.func,
  submit: PropTypes.bool,
};

export default Button;
