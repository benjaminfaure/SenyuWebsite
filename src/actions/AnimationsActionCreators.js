import {
  REQUEST_SENYU_ANIMATIONS,
  RECEIVE_SENYU_ANIMATIONS,
  REQUEST_SENYU_ANIMATION_BY_ID,
  RECEIVE_SENYU_ANIMATION_BY_ID
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let AnimationsActionCreators = {


  fetchSenyuAnimations() {
    return (dispatch) => {
      dispatch({ type: REQUEST_SENYU_ANIMATIONS });
      SenyuAPI.fetchSenyuAnimations().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const animations = response.data;
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS, success: true, animations});
        } else {
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS, success: false, error: response.message })
        }
      });
    };
  },


  fetchSenyuAnimationsByType(type) {
    return (dispatch) => {
      dispatch({ type: REQUEST_SENYU_ANIMATIONS });
      SenyuAPI.fetchSenyuAnimations().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const animations = response.data.filter(animation => animation.type === type);
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS, success: true, animations});
        } else {
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS, success: false, error: response.message })
        }
      });
    };
  },

  fetchSenyuAnimationById(id) {
    return (dispatch) => {
      dispatch({ type: REQUEST_SENYU_ANIMATION_BY_ID });
      SenyuAPI.fetchSenyuAnimationById(id).then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const animation = response.data;
          dispatch({ type: RECEIVE_SENYU_ANIMATION_BY_ID, success: true, id, animation});
        } else {
          dispatch({ type: RECEIVE_SENYU_ANIMATION_BY_ID, success: false, id, error: response.message })
        }
      });
    };
  },

};

export default AnimationsActionCreators;
