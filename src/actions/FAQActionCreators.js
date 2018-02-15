import {
  REQUEST_FAQ,
  RECEIVE_FAQ_SUCCESS,
  RECEIVE_FAQ_ERROR
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let FAQActionCreators = {

  fetchFAQ() {
    return (dispatch) => {
      dispatch({ type: REQUEST_FAQ });
      SenyuAPI.fetchFAQ().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const faq = response.data;
          dispatch({ type: RECEIVE_FAQ_SUCCESS, success: true, faq});
        } else {
          dispatch({ type: RECEIVE_FAQ_ERROR, success: false, error: response.message })
        }
      });
    };
  },

};

export default FAQActionCreators;
