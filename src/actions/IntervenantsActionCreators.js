import {
  REQUEST_INTERVENANTS,
  RECEIVE_INTERVENANTS,
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let IntervenantsActionCreators = {


  fetchIntervenants() {
    return (dispatch) => {
      dispatch({ type: REQUEST_INTERVENANTS });
      SenyuAPI.fetchIntervenants().then(
        (intervenants) => dispatch({ type: RECEIVE_INTERVENANTS, success:true, intervenants }),
        (error) => dispatch({ type: RECEIVE_INTERVENANTS, success:false, error })
      );
    };
  },


};

export default IntervenantsActionCreators;
