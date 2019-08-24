import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initial = {
  isLoadingApp: true,
  isMobile: false,
  menuIsActive: false,
};

export default handleActions({
  [actions.onLoadApp](state) {
    return {
      ...state,
      isLoadingApp: false, // для первой анимации качалки на главном экране
    };
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
