import { combineReducers } from 'redux';
import menu, * as fromMenu from './menu';
import dimensions, * as fromDimensions from './dimensions';
import intervenants from './intervenants';


const rootReducer = combineReducers({
  menu,
  dimensions,
  intervenants
});


export default rootReducer;


export const getShowMainContent = (state) => fromMenu.getShowMainContent(state.menu);
export const getDimensions = (state) => fromDimensions.getDimensions(state.dimensions);
