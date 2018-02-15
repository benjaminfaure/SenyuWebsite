import {
  RECEIVE_INTERVENANTS_SUCCESS,
  RECEIVE_INTERVENANTS_ERROR,
  RECEIVE_INTERVENANT_BY_ID_SUCCESS,
  RECEIVE_INTERVENANT_BY_ID_ERROR
} from '../constants';
import 'babel-polyfill';


const initialState = {
  list: [],
  selected: { id: 0, nom: '', description: '' }
}

const intervenants = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INTERVENANTS_SUCCESS:
      return { ...state, list: action.intervenants };

    case RECEIVE_INTERVENANTS_ERROR:
      return { ...state, error: action.error };

    case RECEIVE_INTERVENANT_BY_ID_SUCCESS:
      return { ...state, selected: action.intervenant };

    case RECEIVE_INTERVENANT_BY_ID_ERROR:
      return { ...state, error: action.error };


    default:
      return state;
  }
}

export default intervenants;
