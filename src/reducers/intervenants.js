import {
  RECEIVE_INTERVENANTS
} from '../constants';
import 'babel-polyfill';


const intervenants = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_INTERVENANTS:
      return action.intervenants;


    default:
      return state;
  }
}

export default intervenants;
