import {
  RECEIVE_INTERVENANTS,
  RECEIVE_INTERVENANT_BY_ID
} from '../constants';
import 'babel-polyfill';


const initialState = {
  list: [],
  selected: { id: 0, nom: '', description: '' }
}

const intervenants = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INTERVENANTS:
      return { ...state, list: action.intervenants };

    case RECEIVE_INTERVENANT_BY_ID:
      return { ...state, selected: action.intervenant };


    default:
      return state;
  }
}

export default intervenants;
