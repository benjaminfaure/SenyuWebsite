import {
  REQUEST_EXPOSANTS,
  RECEIVE_EXPOSANTS,
  REQUEST_EXPOSANTS_BY_TYPE,
  RECEIVE_EXPOSANTS_BY_TYPE,
  REQUEST_EXPOSANT_BY_ID,
  RECEIVE_EXPOSANT_BY_ID
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let ExposantsActionCreators = {


  fetchExposants() {
    return (dispatch) => {
      dispatch({ type: REQUEST_EXPOSANTS });
      SenyuAPI.fetchExposants().then(
        (exposants) => dispatch({ type: RECEIVE_EXPOSANTS, success: true, exposants }),
        (error) => dispatch({ type: RECEIVE_EXPOSANTS, success: false, error })
      );
    };
  },
  fetchExposantsByType(type) {
    return (dispatch) => {
      dispatch({ type: REQUEST_EXPOSANTS_BY_TYPE });
      SenyuAPI.fetchExposantsByType(type).then(
        (exposants) => dispatch({ type: RECEIVE_EXPOSANTS_BY_TYPE, success: true, exposants, typeExposant: type }),
        (error) => dispatch({ type: RECEIVE_EXPOSANTS_BY_TYPE, success: false, error, typeExposant: type })
      );
    };
  },

  fetchExposantById(id) {
    return (dispatch) => {
      dispatch({ type: REQUEST_EXPOSANT_BY_ID });
      SenyuAPI.fetchExposantById(id).then(
        (exposant) => dispatch({ type: RECEIVE_EXPOSANT_BY_ID, success: true, id, exposant }),
        (error) => dispatch({ type: RECEIVE_EXPOSANT_BY_ID, success: false, id, error })
      );
    };
  },


};

export default ExposantsActionCreators;
