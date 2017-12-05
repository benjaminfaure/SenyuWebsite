import { combineReducers } from 'redux';
import dimensions, * as fromDimensions from './dimensions';
import exposants from './exposants';
import intervenants from './intervenants';
import animations from './animations';
import faq from './faq';
import twitch from './twitch';


const rootReducer = combineReducers({
  animations,
  dimensions,
  exposants,
  faq,
  intervenants,
  twitch,
});


export default rootReducer;


export const getDimensions = (state) => fromDimensions.getDimensions(state.dimensions);
