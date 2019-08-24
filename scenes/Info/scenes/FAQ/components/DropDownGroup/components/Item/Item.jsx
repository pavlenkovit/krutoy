import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Transition } from 'react-transition-group';
import DropDownIcon from '../../../../../../../../icons/DropDownIcon';

import css from './Item.module.scss';

class Item extends PureComponent {
  constructor(props) {
    super(props);

    this.content = null;
    this.state = { isOpen: false, clientHeight: 0 };
  }

  setHeight = () => {
    if (!this.content) {
      return null;
    }
    this.setState({ clientHeight: this.content.clientHeight });
  };

  clearHeight = () => {
    this.setState({ clientHeight: 0 });
  };

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { question, content } = this.props;
    const { isOpen, clientHeight } = this.state;
    return (
      <div className={css.container}>
        <div className={cn(css.question, { [css.question_open]: isOpen })} onClick={this.handleClick}>
          <DropDownIcon customClass={css.icon} />
          <span>{question}</span>
        </div>
        <Transition
          in={isOpen}
          timeout={300}
          onExited={this.clearHeight}
          onEntering={this.setHeight}
          onEntered={this.setHeight}
          onExiting={this.clearHeight}
          mountOnEnter
        >
          <div
            style={{ height: clientHeight }}
            className={css.content}
          >
            <div className={css.innerContent} ref={(ref) => { this.content = ref; }}>
              {content}
            </div>
          </div>
        </Transition>
      </div>
    );
  }
}

Item.propTypes = {
  question: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Item;
