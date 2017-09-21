import {
  RECEIVE_EXPOSANTS,
  RECEIVE_EXPOSANTS_BY_TYPE,
  RECEIVE_EXPOSANT_BY_ID
} from '../constants';
import 'babel-polyfill';


const initialState = {
  list: [],
  selected: { id:0, nom: '', description: ''}
}

const intervenants = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EXPOSANTS:
      return { ...state, list: action.exposants };

    case RECEIVE_EXPOSANTS_BY_TYPE:
      return { ...state, list: action.exposants };

    case RECEIVE_EXPOSANT_BY_ID:
      return {...state,  selected: action.exposant };


    default:
      return state;
  }
}

export default intervenants;
