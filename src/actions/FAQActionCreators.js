import {
  REQUEST_FAQ,
  RECEIVE_FAQ
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let FAQActionCreators = {

  fetchFAQ() {
    return (dispatch) => {
      dispatch({ type: REQUEST_FAQ });
      SenyuAPI.fetchFAQ().then(
        (faq) => dispatch({ type: RECEIVE_FAQ, success: true, faq }),
        (error) => dispatch({ type: RECEIVE_FAQ, success: false, error })
      );
    };
  },

};

export default FAQActionCreators;
