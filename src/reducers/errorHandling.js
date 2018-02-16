import {
  RECEIVE_SENYU_ANIMATIONS_ERROR,
  RECEIVE_SENYU_ANIMATION_BY_ID_ERROR,
  RECEIVE_INTERVENANTS_ERROR,
  RECEIVE_INTERVENANT_BY_ID_ERROR,
  RECEIVE_EXPOSANTS_ERROR,
  RECEIVE_EXPOSANTS_BY_TYPE_ERROR,
  RECEIVE_EXPOSANT_BY_ID_ERROR,
  RECEIVE_FAQ_ERROR
} from '../constants';
import 'babel-polyfill';



const errorHandling = (state = null, action) => {
  switch (action.type) {

    /* Animations */
    case RECEIVE_SENYU_ANIMATIONS_ERROR:
      return action.error;

    case RECEIVE_SENYU_ANIMATION_BY_ID_ERROR:
      return action.error;


    /* Exposants */
    case RECEIVE_EXPOSANTS_ERROR:
      return action.error;

    case RECEIVE_EXPOSANTS_BY_TYPE_ERROR:
      return action.error;

    case RECEIVE_EXPOSANT_BY_ID_ERROR:
      return action.error;


    /* FAQ */
    case RECEIVE_FAQ_ERROR:
      return action.error;


    /* Intervenants */
    case RECEIVE_INTERVENANTS_ERROR:
      return action.error;

    case RECEIVE_INTERVENANT_BY_ID_ERROR:
      return action.error;


    default:
      return state;
  }
}

export default errorHandling;
