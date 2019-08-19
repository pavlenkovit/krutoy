import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initial = {
  isLoadingApp: true,
  color: null,
  activePage: null,
  activeModel: null,
  isMobile: false,
  cartMode: false,
  menuIsActive: false,
};

export default handleActions({
  [actions.onLoadApp](state) {
    return {
      ...state,
      isLoadingApp: false,
    };
  },

  [actions.changeColor](state, { payload }) {
    const { color } = payload;
    return { ...state, color };
  },

  [actions.changePage](state, { payload }) {
    const { activePage } = payload;
    const cartMode = activePage === '/cart';
    return {
      ...state,
      activePage,
      cartMode,
    };
  },

  [actions.changeModel](state, { payload }) {
    const { id } = payload;
    return { ...state, activeModel: id };
  },

  [actions.checkIsMobile](state, { payload }) {
    const { isMobile } = payload;
    return { ...state, isMobile };
  },

  [actions.toggleMenu](state) {
    return {
      ...state,
      menuIsActive: !state.menuIsActive,
    };
  },

  [actions.closeMenu](state) {
    return {
      ...state,
      menuIsActive: false,
    };
  },

}, initial);
