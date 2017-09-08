import {
  RECEIVE_INTERVENANTS,
  RECEIVE_INTERVENANT_BY_ID
} from '../constants';
import 'babel-polyfill';


const intervenantsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_INTERVENANTS:
      return action.intervenants;

    case RECEIVE_INTERVENANT_BY_ID:
      return action.intervenant;


    default:
      return state;
  }
}

export default intervenantsReducer;
