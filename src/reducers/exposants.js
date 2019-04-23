import {
  RECEIVE_EXPOSANTS_SUCCESS,
  RECEIVE_EXPOSANTS_BY_TYPE_SUCCESS,
  RECEIVE_EXPOSANT_BY_ID_SUCCESS
} from '../constants';
import 'core-js/stable';
import 'regenerator-runtime/runtime';


const initialState = {
  list: [],
  selected: { id: 0, nom: '', description: '' }
}

const intervenants = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EXPOSANTS_SUCCESS:
      return { ...state, list: action.exposants };

    case RECEIVE_EXPOSANTS_BY_TYPE_SUCCESS:
      return { ...state, list: action.exposants };

    case RECEIVE_EXPOSANT_BY_ID_SUCCESS:
      return { ...state, selected: action.exposant };


    default:
      return state;
  }
}

export default intervenants;
