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
      SenyuAPI.fetchExposants().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const exposants = response.data;
          dispatch({ type: RECEIVE_EXPOSANTS, success: true, exposants});
        } else {
          dispatch({ type: RECEIVE_EXPOSANTS, success: false, error: response.message })
        }
      });
    };
  },
  fetchExposantsByType(type) {
    return (dispatch) => {
      dispatch({ type: REQUEST_EXPOSANTS_BY_TYPE });
      SenyuAPI.fetchExposants().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const exposants = response.data.filter(exposant => exposant.type === type);
          dispatch({ type: RECEIVE_EXPOSANTS_BY_TYPE, success: true, exposants, typeExposant: type  });
        } else {
          dispatch({ type: RECEIVE_EXPOSANTS_BY_TYPE, success: false, error: response.message, typeExposant: type  })
        }
      });
    };
  },

  fetchExposantById(id) {
    return (dispatch) => {
      dispatch({ type: REQUEST_EXPOSANT_BY_ID });
      SenyuAPI.fetchExposantById(id).then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const exposant = response.data;
          dispatch({ type: RECEIVE_EXPOSANT_BY_ID, success: true, id, exposant });
        } else {
          dispatch({ type: RECEIVE_EXPOSANT_BY_ID, success: false, id, error: response.message })
        }
      });
    };
  },


};

export default ExposantsActionCreators;
