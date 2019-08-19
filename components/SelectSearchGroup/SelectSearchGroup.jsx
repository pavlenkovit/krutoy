import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './SelectSearchGroup.module.scss';

class SelectSearchGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();

    this.state = { isOpen: false };
  }

  onChange = (event) => {
    const { changeData, name } = this.props;
    changeData({ [name]: event.target.value });
  };

  onSelect = value => () => {
    const { name, changeData } = this.props;
    changeData({ [name]: value });
    this.close();
  };

  inputBlur = () => {
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 300);
  };

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { activeItem, items, isInvalid, white } = this.props;
    const { isOpen } = this.state;

    const classesContainer = cn(css.container, {
      [css.containerActive]: isOpen && items.length > 0,
      [css.whiteMode]: white,
      [css.containerInvalid]: isInvalid,
    });

    return (
      <div ref={this.container} className={classesContainer}>
        <div className={css.main}>
          <input className={css.input} type="text" placeholder="Введите название" value={activeItem} onFocus={this.open} onBlur={this.inputBlur} onChange={this.onChange} />
        </div>
        {isOpen && items.length > 0 && (
          <div className={css.items}>
            {items.map((item, idx) => {
              const classesItem = cn(css.item, {
                [css.itemActive]: item === activeItem,
              });

              return (
                <div className={classesItem} key={idx} onClick={this.onSelect(item)}>
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

SelectSearchGroup.propTypes = {
  activeItem: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  changeData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectSearchGroup;
