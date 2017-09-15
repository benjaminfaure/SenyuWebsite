import { combineReducers } from 'redux';
import dimensions, * as fromDimensions from './dimensions';
import intervenants from './intervenants';
import faq from './faq';


const rootReducer = combineReducers({
  dimensions,
  faq,
  intervenants
});


export default rootReducer;


export const getDimensions = (state) => fromDimensions.getDimensions(state.dimensions);
