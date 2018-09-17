import {
  REQUEST_REGISTRATION_SUBMIT,
  RECEIVE_REGISTRATION_SUBMIT_SUCCESS,
  RECEIVE_REGISTRATION_SUBMIT_ERROR,
  REQUEST_MODELES_DE_STAND,
  RECEIVE_MODELES_DE_STAND_SUCCESS,
  RECEIVE_MODELES_DE_STAND_ERROR
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let RegistrationsActionCreators = {


  submitRegistration(values) {
    return (dispatch) => {
      dispatch({ type: REQUEST_REGISTRATION_SUBMIT });
			values.etape1.typeIntervenant = values.typeIntervenant;
      SenyuAPI.submitRegistration(values).then((response) => {
        if(response.status >= 200 && response.status < 300) {
          dispatch({ type: RECEIVE_REGISTRATION_SUBMIT_SUCCESS, values, response});
        } else {
          dispatch({ type: RECEIVE_REGISTRATION_SUBMIT_ERROR, values, error: response.data })
        }
      });
    };
  },

  fetchModelesDeStands(typeInscription) {
    return (dispatch) => {
      dispatch({ type: REQUEST_MODELES_DE_STAND });
      SenyuAPI.fetchModelesDeStands(typeInscription).then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const modeles = response.data;
          dispatch({ type: RECEIVE_MODELES_DE_STAND_SUCCESS, typeInscription, modeles});
        } else {
          dispatch({ type: RECEIVE_MODELES_DE_STAND_ERROR, typeInscription, error: response.message })
        }
      });
    };
  },

};

export default RegistrationsActionCreators;
