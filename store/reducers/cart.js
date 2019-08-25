import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initial = {
  products: [],
  total: 0,

  // products: [
  //   {
  //     count: 3,
  //     id: 'hvost',
  //     dataId: 2,
  //     img: '/static/img/content/our_assembly.svg',
  //     name: 'Хвост',
  //     price: 1035,
  //     type: 'accessory',
  //     packageSizes: { height: 15, length: 76, width: 30, weight: 5.5 },
  //   },
  //   {
  //     count: 2,
  //     id: 'moose',
  //     dataId: 1,
  //     img: '/static/img/content/our_assembly.svg',
  //     name: 'Лось',
  //     price: 4508,
  //     type: 'model',
  //     packageSizes: { height: 15, length: 76, width: 30, weight: 5.5 },
  //   },
  //   {
  //     count: 1,
  //     id: 'assembly',
  //     dataId: '999',
  //     img: '/static/img/content/our_assembly.svg',
  //     name: 'Наша сборка',
  //     price: 500,
  //     type: 'service',
  //     packageSizes: "",
  //   },
  // ],
  // total: 12621,

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

export default handleActions({
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

    return { ...state, products, ...recount(products, deliveryPrice) };
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

    return { ...state, products, ...recount(products, deliveryPrice) };
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

    return { ...state, products, ...recount(products, deliveryPrice) };
  },

  [actions.removeFromCart](state, { payload }) {
    const { id } = payload;
    const { deliveryPrice } = state;

    const products = state.products.filter(item => item.id !== id);

    return { ...state, products, ...recount(products, deliveryPrice) };
  },

  [actions.resetAll](state) {
    const { deliveryPrice } = state;
    const products = [];
    return { ...state, products, ...recount(products, deliveryPrice) };
  },

  [actions.changeData](state, { payload }) {
    const { data } = payload;
    const newState = { ...state, ...data };
    const { products, deliveryPrice } = newState;
    return { ...newState, ...recount(products, deliveryPrice) };
  },

  [actions.changeStep](state, { payload }) {
    const { stepOpen } = payload;
    return { ...state, stepOpen };
  },

}, initial);
