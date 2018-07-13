import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import dimensions, * as fromDimensions from './dimensions';
import errorHandling  from './errorHandling';
import exposants from './exposants';
import intervenants from './intervenants';
import animations from './animations';
import faq from './faq';
import twitch from './twitch';
import modeles from './modeles';


const rootReducer = combineReducers({
  animations,
  dimensions,
  errorHandling,
  exposants,
  faq,
  form: formReducer,
  intervenants,
  modeles,
  twitch,
});


export default rootReducer;


export const getDimensions = (state) => fromDimensions.getDimensions(state.dimensions);
