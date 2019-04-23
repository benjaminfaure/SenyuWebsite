import {
  RECEIVE_REGISTRATION_SUBMIT_SUCCESS,
	//REQUEST_REGISTRATION_SUBMIT
} from '../constants';
import 'core-js/stable';
import 'regenerator-runtime/runtime';


const initialState = {
  registrationComplete: false,
  values: { }
}

const registrations = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REGISTRATION_SUBMIT_SUCCESS:
      return { ...state, registrationComplete: true, values: action.values };
    default:
      return state;
  }
}

export default registrations;
