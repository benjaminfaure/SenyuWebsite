import {
  RECEIVE_SENYU_ANIMATIONS,
  RECEIVE_SENYU_ANIMATION_BY_ID
} from '../constants';
import 'babel-polyfill';


const initialState = {
  list: [],
  selected: { id:0, nom: '', description: ''}
}

const animations = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SENYU_ANIMATIONS:
      return { ...state, list: action.animations };

    case RECEIVE_SENYU_ANIMATION_BY_ID:
      return {...state,  selected: action.animation };


    default:
      return state;
  }
}

export default animations;
