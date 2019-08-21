import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '../../components/Button';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import DeleteButton from './components/DeleteButton';
import MessageArea from '../../components/MessageArea';
import CustomHead from '../../components/CustomHead';

import css from './Cart.module.scss';

class Cart extends PureComponent {
  increment = id => () => {
    const { incrementProduct } = this.props;
    incrementProduct(id);
  };

  decrement = id => () => {
    const { decrementProduct } = this.props;
    decrementProduct(id);
  };

  remove = id => () => {
    const { removeFromCart } = this.props;
    removeFromCart(id);
  };

  checkout = () => {
    this.props.changeStep(2);
  };

  render() {
    const { products, total, isMobile } = this.props;

    if (products.length === 0) {
      return (
        <>
          <Meta title="Корзина" />
          <MessageArea
            content={(
              <>
                Ваша корзина пуста и очень одинока!<br />
                Обрадуйте ее забавными и полезными игрушками.
              </>
            )}
            linkText="Порадовать себя и корзину"
          />
        </>
      );
    }

    return (
      <div className={css.main}>
        <CustomHead
          title="Корзина"
          url="/cart"
        />
        <h1 className={css.mainTitle}>Ваша корзина</h1>
        <div className={css.container}>
          <table className={css.table}>
            <tbody>
              {isMobile ? (
                <tr>
                  <th>Продукт</th>
                  <th>Итого</th>
                </tr>
              ) : (
                <tr>
                  <th>Продукт</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Итого</th>
                </tr>
              )}
              <TransitionGroup component={null}>
                {products.map((product) => {
                  const counterClasses = cn(css.counter, {
                    [css.counter_disabled]: product.type === 'service',
                  });

                  return (
                    <CSSTransition
                      key={product.id}
                      timeout={500}
                      classNames={{
                        exit: css.trExit,
                        exitActive: css.trExitActive,
                      }}
                    >
                      {isMobile ? (
                        <>
                          <tr>
                            <td>
                              <div className={css.product}>
                                <div className={css.imgWrap}>
                                  <img src={product.img} alt="" />
                                </div>
                                <div className={css.titleWrapper}>
                                  <h2 className={css.productTitle}>
                                  {product.type === 'model' && 'Качалка '}{product.name}
                                  {product.type !== 'service' && <div className={css.brand}>KRUTOY</div>}
                                </h2>
                                  <div>{product.price}₽</div>
                                </div>
                              </div>
                            </td>
                            <td className={css.tdPrice}>
                              <div className={css.itemPrice}>{product.count * product.price}₽</div>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2} className={css.tdFooter}>
                              <div className={css.buttonGroup}>
                                <div className={counterClasses}>
                                  <DecrementButton handleClick={this.decrement(product.id)} />
                                  <div className={css.count}>{product.count}</div>
                                  <IncrementButton handleClick={this.increment(product.id)} />
                                </div>
                                <div className={css.deleteButton}>
                                  <DeleteButton handleClick={this.remove(product.id)} />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      ) : (
                        <tr>
                          <td>
                            <div className={css.product}>
                              <div className={css.imgWrap}>
                                <img src={product.img} alt="" />
                              </div>
                              <div className={css.titleWrapper}>
                                <h2 className={css.productTitle}>
                                {product.type === 'model' && 'Качалка '}{product.name}
                              </h2>
                                {product.type !== 'service' && <div className={css.brand}>KRUTOY</div>}
                              </div>
                            </div>
                          </td>
                          <td>{product.price}₽</td>
                          <td>
                            <div className={css.buttonGroup}>
                              <div className={counterClasses}>
                                <DecrementButton handleClick={this.decrement(product.id)} />
                                <div className={css.count}>{product.count}</div>
                                <IncrementButton handleClick={this.increment(product.id)} />
                              </div>
                              <DeleteButton handleClick={this.remove(product.id)} />
                            </div>
                          </td>
                          <td><div className={css.itemPrice}>{product.count * product.price}₽</div></td>
                        </tr>
                      )}
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            </tbody>
          </table>
          <div className={css.total}>
            <div className={css.totalTitle}>Итого:</div>
            <div className={css.totalPrice}>{total}₽</div>
          </div>
          <div className={css.buttonWrapper}>
            <Button handleClick={this.checkout} href="/cart?step=2" as="/cart/2">Оформить</Button>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  incrementProduct: PropTypes.func.isRequired,
  decrementProduct: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Cart;
