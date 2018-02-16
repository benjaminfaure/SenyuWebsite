import {
  RECEIVE_FAQ_SUCCESS
} from '../constants';
import 'babel-polyfill';


const initialState = [{
  id: 0,
  categorie: '',
  questions: []
}]

const faq = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FAQ_SUCCESS:
      return action.faq;

    default:
      return state;
  }
}

export default faq;
