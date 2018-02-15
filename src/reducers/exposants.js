import {
  RECEIVE_EXPOSANTS_SUCCESS,
  RECEIVE_EXPOSANTS_ERROR,
  RECEIVE_EXPOSANTS_BY_TYPE_SUCCESS,
  RECEIVE_EXPOSANTS_BY_TYPE_ERROR,
  RECEIVE_EXPOSANT_BY_ID_SUCCESS,
  RECEIVE_EXPOSANT_BY_ID_ERROR
} from '../constants';
import 'babel-polyfill';


const initialState = {
  list: [],
  selected: { id: 0, nom: '', description: '' }
}

const intervenants = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EXPOSANTS_SUCCESS:
      return { ...state, list: action.exposants };

    case RECEIVE_EXPOSANTS_ERROR:
      return { ...state, error: action.error };

    case RECEIVE_EXPOSANTS_BY_TYPE_SUCCESS:
      return { ...state, list: action.exposants };

    case RECEIVE_EXPOSANTS_BY_TYPE_ERROR:
      return { ...state, error: action.error };

    case RECEIVE_EXPOSANT_BY_ID_SUCCESS:
      return { ...state, selected: action.exposant };


    case RECEIVE_EXPOSANT_BY_ID_ERROR:
      return { ...state, error: action.error };


    default:
      return state;
  }
}

export default intervenants;
