import {
  TOGGLE_MAIN_CONTENT,
  RESET_MENU_STATE
} from '../constants';
import update from 'react-addons-update';
import 'babel-polyfill';

const defaultMenuState = () => {
  return {
    showMainContent: true
  }
};


const menu = (state = defaultMenuState(), action) => {
  switch (action.type) {
    /*
     * Menu Toggle
     */
    case TOGGLE_MAIN_CONTENT:
      return update(state, {
        showMainContent: { $apply: currentValue => (currentValue !== false)? false : true }
      });
    case RESET_MENU_STATE:
      return defaultMenuState();
    default:
      return state;
  }
};



export default menu;

export const getShowMainContent = (state) => state.showMainContent;
