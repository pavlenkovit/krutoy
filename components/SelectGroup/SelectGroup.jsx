import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import DropDownIcon from '../../icons/DropDownIcon';

import css from './SelectGroup.module.scss';

class SelectGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();

    this.state = { isOpen: false };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
    document.addEventListener('touchstart', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    document.removeEventListener('touchstart', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.state.isOpen && !this.container.current.contains(event.target)) {
      this.close();
    }
  };

  onSelect = value => () => {
    const { name, changeData } = this.props;

    changeData({ [name]: value });
    this.close();
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { activeItem, items, white } = this.props;
    const { isOpen } = this.state;

    const classesContainer = cn(css.container, {
      [css.containerActive]: isOpen,
      [css.whiteMode]: white,
    });

    const activeTitle = items.find(item => item.id === activeItem).title;

    return (
      <div ref={this.container} className={classesContainer}>
        <div className={css.main} onClick={this.toggle}>
          <div>{activeTitle}</div>
          <div className={css.iconWrap}>
            <DropDownIcon customClass={css.icon} />
          </div>
        </div>
        {isOpen && (
          <div className={css.items}>
            {items.map((item, idx) => {
              const classesItem = cn(css.item, {
                [css.itemActive]: item.id === activeItem,
              });

              return (
                <div className={classesItem} key={idx} onClick={this.onSelect(item.id)}>
                  {item.title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

SelectGroup.defaultProps = {
  white: false,
};

SelectGroup.propTypes = {
  activeItem: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  changeData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  white: PropTypes.bool.isRequired,
};

export default SelectGroup;
