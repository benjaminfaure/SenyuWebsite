import {
  RECEIVE_SENYU_ANIMATIONS_SUCCESS,
  RECEIVE_SENYU_ANIMATIONS_ERROR,
  RECEIVE_SENYU_ANIMATION_BY_ID_SUCCESS,
  RECEIVE_SENYU_ANIMATION_BY_ID_ERROR
} from '../constants';
import 'babel-polyfill';


const initialState = {
  list: [],
  selected: { id: 0, nom: '', description: '' }
}

const animations = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SENYU_ANIMATIONS_SUCCESS:
      return { ...state, list: action.animations };

    case RECEIVE_SENYU_ANIMATIONS_ERROR:
      return { ...state, error: action.error };

    case RECEIVE_SENYU_ANIMATION_BY_ID_SUCCESS:
      return { ...state, selected: action.animation };

    case RECEIVE_SENYU_ANIMATION_BY_ID_ERROR:
      return { ...state, error: action.error };


    default:
      return state;
  }
}

export default animations;
