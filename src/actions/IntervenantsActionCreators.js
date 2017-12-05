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
      SenyuAPI.fetchIntervenants().then(
        (intervenants) => dispatch({ type: RECEIVE_INTERVENANTS, success: true, intervenants }),
        (error) => dispatch({ type: RECEIVE_INTERVENANTS, success: false, error })
      );
    };
  },

  fetchIntervenantById(id) {
    return (dispatch) => {
      dispatch({ type: REQUEST_INTERVENANT_BY_ID });
      SenyuAPI.fetchIntervenantById(id).then(
        (intervenant) => dispatch({ type: RECEIVE_INTERVENANT_BY_ID, success: true, id, intervenant }),
        (error) => dispatch({ type: RECEIVE_INTERVENANT_BY_ID, success: false, id, error })
      );
    };
  },

};

export default IntervenantsActionCreators;
