import {
  RECEIVE_MODELES_DE_STAND_SUCCESS,
} from '../constants';
import "@babel/polyfill";


const initialState = {
  selectedModele: 0,
  list: []
}

const modeles = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MODELES_DE_STAND_SUCCESS:
      return { ...state, list: action.modeles };
    default:
      return state;
  }
}

export default modeles;
