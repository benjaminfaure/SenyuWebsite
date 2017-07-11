import { combineReducers } from 'redux';
import menu, * as fromMenu from './menu';
import dimensions, * as fromDimensions from './dimensions';


const rootReducer = combineReducers({
  menu,
  dimensions
});


export default rootReducer;


export const getShowMainContent = (state) => fromMenu.getShowMainContent(state.menu);
export const getDimensions = (state) => fromDimensions.getDimensions(state.dimensions);
