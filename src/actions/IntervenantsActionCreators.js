import {
  REQUEST_INTERVENANTS,
  RECEIVE_INTERVENANTS_SUCCESS,
  RECEIVE_INTERVENANTS_ERROR,
  REQUEST_INTERVENANT_BY_ID,
  RECEIVE_INTERVENANT_BY_ID_SUCCESS,
  RECEIVE_INTERVENANT_BY_ID_ERROR
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let IntervenantsActionCreators = {


  fetchIntervenants() {
    return (dispatch) => {
      dispatch({ type: REQUEST_INTERVENANTS });
      SenyuAPI.fetchIntervenants().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const intervenants = response.data;
          dispatch({ type: RECEIVE_INTERVENANTS_SUCCESS, intervenants});
        } else {
          dispatch({ type: RECEIVE_INTERVENANTS_ERROR, error: response.message })
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
          dispatch({ type: RECEIVE_INTERVENANT_BY_ID_SUCCESS, id, intervenant});
        } else {
          dispatch({ type: RECEIVE_INTERVENANT_BY_ID_ERROR, id, error: response.message })
        }
      });
    };
  },

};

export default IntervenantsActionCreators;
