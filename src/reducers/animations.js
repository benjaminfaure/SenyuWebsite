import {
  RECEIVE_SENYU_ANIMATIONS_SUCCESS,
  RECEIVE_SENYU_ANIMATION_BY_ID_SUCCESS,
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

    case RECEIVE_SENYU_ANIMATION_BY_ID_SUCCESS:
      return { ...state, selected: action.animation };


    default:
      return state;
  }
}

export default animations;
