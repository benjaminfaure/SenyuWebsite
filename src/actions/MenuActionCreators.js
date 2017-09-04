import {
  TOGGLE_MAIN_CONTENT,
  RESET_MENU_STATE,
} from '../constants';


let MenuActionCreators = {


  toggleMainContent() {
    return { type: TOGGLE_MAIN_CONTENT };
  },
  resetMenuState() {
    return { type: RESET_MENU_STATE };
  }

};

export default MenuActionCreators;
