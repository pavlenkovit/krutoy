import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import css from './ModelLink.module.scss';

class ModelLink extends PureComponent {
  constructor(props) {
    super(props);

    this.container = createRef();

    this.state = {
      x: 0,
      y: 0,
      isActive: false,
    };
  }

  mouseMove = (e) => {
    const el = this.container.current;

    const x = e.clientX - el.getBoundingClientRect().left;
    const y = e.clientY - el.getBoundingClientRect().top;

    this.setState({
      isActive: true,
      x: x / el.offsetWidth * 2 - 1,
      y: y / el.offsetHeight * 2 - 1,
    });
  };

  endMove = () => {
    this.setState({
      isActive: false,
      x: 0,
      y: 0,
    });
  };

  render() {
    const { id, title, selected } = this.props;
    const { x, y } = this.state;

    return (
      <div
        className={cn(css.item, { [css.item_disabled]: selected })}
        ref={this.container}
        onMouseMove={this.mouseMove}
        onMouseLeave={this.endMove}
      >
        <Link href={`/?model=${id}`}>
          <a className={css.link}>
            <div className={css.title} style={{ transform: `translate(${x * 15}%, ${y * 20}%)` }}>{title}</div>
          </a>
        </Link>
      </div>
    );
  }
}

ModelLink.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.bool,
};

export default ModelLink;
