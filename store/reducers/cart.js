import { handleActions } from 'redux-actions';
import * as actions from '../actions';

let initial = {
  products: [],
  total: 0,
  stepOpen: 1,
  deliveryType: '',
  deliveryTitle: '',
  deliveryPrice: 0,
  email: '',
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  postcode: '',
  telephone: '',
  paymentMethod: 'cash',
};

const recount = (products, deliveryPrice) => {
  let count = 0;
  let total = 0;

  products.forEach((product) => {
    count += product.count;
    total += product.count * product.price;
  });

  return { count, total, totalWithDelivery: total + deliveryPrice };
};

const updateStorage = (state) => {
  // const { products, total, stepOpen, deliveryType, deliveryTitle, deliveryPrice, email, firstName, lastName, street, city, postcode, telephone, paymentMethod } = state;
  // localStorage.setItem('products', JSON.stringify(products));
  // localStorage.setItem('total', total);
  // localStorage.setItem('stepOpen', stepOpen);
  // localStorage.setItem('deliveryType', deliveryType);
  // localStorage.setItem('deliveryTitle', deliveryTitle);
  // localStorage.setItem('deliveryPrice', deliveryPrice);
  // localStorage.setItem('email', email);
  // localStorage.setItem('firstName', firstName);
  // localStorage.setItem('lastName', lastName);
  // localStorage.setItem('street', street);
  // localStorage.setItem('city', city);
  // localStorage.setItem('postcode', postcode);
  // localStorage.setItem('telephone', telephone);
  // localStorage.setItem('paymentMethod', paymentMethod);
};

export default handleActions({
  [actions.update](state, { payload }) {
    const { localStorage } = payload;
    console.log(localStorage);
    return { ...state, localStorage };
  },

  [actions.addToCart](state, { payload }) {
    const { product, callback } = payload;
    const { deliveryPrice } = state;
    let { products } = state;

    if (state.products.find(item => item.id === product.id)) {
      if (callback) {
        callback();
      }
    } else {
      products = [...state.products, { ...product, count: 1 }];
    }

    const result = { ...state, products, ...recount(products, deliveryPrice) };
    updateStorage(result);
    return result;
  },

  [actions.incrementProduct](state, { payload }) {
    const { id } = payload;
    const { deliveryPrice } = state;

    const products = state.products.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    const result = { ...state, products, ...recount(products, deliveryPrice) };
    updateStorage(result);
    return result;
  },

  [actions.decrementProduct](state, { payload }) {
    const { id } = payload;
    const { deliveryPrice } = state;
    let { products } = state;

    const product = products.find(item => item.id === id);

    if (product.count === 1) {
      products = products.filter(item => item.id !== id);
    } else {
      products = products.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    }

    const result = { ...state, products, ...recount(products, deliveryPrice) };
    updateStorage(result);
    return result;
  },

  [actions.removeFromCart](state, { payload }) {
    const { id } = payload;
    const { deliveryPrice } = state;

    const products = state.products.filter(item => item.id !== id);

    const result = { ...state, products, ...recount(products, deliveryPrice) };
    updateStorage(result);
    return result;
  },

  [actions.resetAll](state) {
    const { deliveryPrice } = state;
    const products = [];
    const result = { ...state, products, ...recount(products, deliveryPrice) };
    updateStorage(result);
    return result;
  },

  [actions.changeData](state, { payload }) {
    const { data } = payload;
    const newState = { ...state, ...data };
    const { products, deliveryPrice } = newState;
    const result = { ...newState, ...recount(products, deliveryPrice) };
    updateStorage(result);
    return result;
  },

  [actions.changeStep](state, { payload }) {
    const { stepOpen } = payload;
    const result = { ...state, stepOpen };
    updateStorage(result);
    return result;
  },

}, initial);
