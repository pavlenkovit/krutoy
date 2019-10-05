import { createAction } from 'redux-actions';

export const onLoadApp = createAction('ON_LOAD_APP');

export const toggleMenu = createAction('TOGGLE_MENU');
export const closeMenu = createAction('CLOSE_MENU');

export const checkIsMobile = createAction('CHECK_IS_MOBILE', isMobile => ({ isMobile }));

export const addToCart = createAction('ADD_TO_CART', (product, callback) => ({ product, callback }));
export const removeFromCart = createAction('REMOVE_FROM_CART', id => ({ id }));
export const incrementProduct = createAction('INCREMENT_PRODUCT', id => ({ id }));
export const decrementProduct = createAction('DECREMENT_PRODUCT', id => ({ id }));
export const resetAll = createAction('RESET_ALL');
export const update = createAction('UPDATE', localStorage => ({ localStorage }));

export const changeData = createAction('CHANGE_DATA', data => ({ data }));

export const changeStep = createAction('CHANGE_STEP', stepOpen => ({ stepOpen }));
