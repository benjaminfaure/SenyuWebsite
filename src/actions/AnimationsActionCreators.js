import {
  REQUEST_SENYU_ANIMATIONS,
  RECEIVE_SENYU_ANIMATIONS_SUCCESS,
  RECEIVE_SENYU_ANIMATIONS_ERROR,
  REQUEST_SENYU_ANIMATION_BY_ID,
  RECEIVE_SENYU_ANIMATION_BY_ID_SUCCESS,
  RECEIVE_SENYU_ANIMATION_BY_ID_ERROR
} from '../constants';
import SenyuAPI from '../api/SenyuAPI';


let AnimationsActionCreators = {


  fetchSenyuAnimations() {
    return (dispatch) => {
      dispatch({ type: REQUEST_SENYU_ANIMATIONS });
      SenyuAPI.fetchSenyuAnimations().then((response) => {
        if(response.status >= 200 && response.status < 300) {
          const animations = response.data;
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS_SUCCESS, animations});
        } else {
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS_ERROR, error: response.message })
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
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS_SUCCESS, animations});
        } else {
          dispatch({ type: RECEIVE_SENYU_ANIMATIONS_ERROR, error: response.message })
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
          dispatch({ type: RECEIVE_SENYU_ANIMATION_BY_ID_SUCCESS, id, animation});
        } else {
          dispatch({ type: RECEIVE_SENYU_ANIMATION_BY_ID_ERROR, id, error: response.message })
        }
      });
    };
  },

};

export default AnimationsActionCreators;
