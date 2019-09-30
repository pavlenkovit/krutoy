import React from 'react';
import Cart from '../scenes/Cart';
import CartStep from '../scenes/CartStep';
import FinalStep from '../scenes/FinalStep';

const CartPage = ({ step }) => {
  switch (step) {
    case '2':
      return <CartStep step={2} />;
    case '3':
      return <CartStep step={3} />;
    case '4':
      return <CartStep step={4} />;
    case '5':
      return <FinalStep />;
    default:
      return <Cart />;
  }
};

CartPage.getInitialProps = async (context) => {
  const { query, req } = context;

  let step = '';
  if (query.step) { // переходы внутри сайта
    step = context.query.step;
  }
  if (req && req.params && req.params.step) { // прямой переход по ссылке
    step = req.params.step;
  }

  return { step };
};

export default CartPage;
