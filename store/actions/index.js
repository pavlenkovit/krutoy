import { createAction } from 'redux-actions';

export const onLoadApp = createAction('ON_LOAD_APP');
export const changeColor = createAction('CHANGE_COLOR', color => ({ color }));
export const changePage = createAction('CHANGE_PAGE', activePage => ({ activePage }));
export const changeModel = createAction('CHANGE_MODEL', id => ({ id }));
//export const changeMode = createAction('CHANEGE_MODE', isCart => {{ isCart }});

export const toggleMenu = createAction('TOGGLE_MENU');
export const closeMenu = createAction('CLOSE_MENU');

export const checkIsMobile = createAction('CHECK_IS_MOBILE', isMobile => ({ isMobile }));

export const addToCart = createAction('ADD_TO_CART', (product, callback) => ({ product, callback }));
export const removeFromCart = createAction('REMOVE_FROM_CART', id => ({ id }));
export const incrementProduct = createAction('INCREMENT_PRODUCT', id => ({ id }));
export const decrementProduct = createAction('DECREMENT_PRODUCT', id => ({ id }));
export const resetAll = createAction('RESET_ALL');

export const changeData = createAction('CHANGE_DATA', data => ({ data }));

export const changeStep = createAction('CHANGE_STEP', stepOpen => ({ stepOpen }));
