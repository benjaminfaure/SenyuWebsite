import {
  REQUEST_INTERVENANTS,
  RECEIVE_INTERVENANTS,
  REQUEST_INTERVENANT_BY_ID,
  RECEIVE_INTERVENANT_BY_ID
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let IntervenantsActionCreators = {


  fetchIntervenants() {
    return (dispatch) => {
      dispatch({ type: REQUEST_INTERVENANTS });
      SenyuAPI.fetchIntervenants().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const intervenants = response.data;
          dispatch({ type: RECEIVE_INTERVENANTS, success: true, intervenants});
        } else {
          dispatch({ type: RECEIVE_INTERVENANTS, success: false, error: response.message })
        }
      });
    };
  },

  fetchIntervenantById(id) {
    return (dispatch) => {
      dispatch({ type: REQUEST_INTERVENANT_BY_ID });
      SenyuAPI.fetchIntervenantById(id).then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const intervenant = response.data;
          dispatch({ type: RECEIVE_INTERVENANT_BY_ID, success: true, id, intervenant});
        } else {
          dispatch({ type: RECEIVE_INTERVENANT_BY_ID, success: false, id, error: response.message })
        }
      });
    };
  },

};

export default IntervenantsActionCreators;
