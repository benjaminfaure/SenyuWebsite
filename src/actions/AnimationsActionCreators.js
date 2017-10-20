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
      SenyuAPI.fetchSenyuAnimations().then(
        (animations) => dispatch({ type: RECEIVE_SENYU_ANIMATIONS, success:true, animations }),
        (error) => dispatch({ type: RECEIVE_SENYU_ANIMATIONS, success:false, error })
      );
    };
  },

  fetchSenyuAnimationById(id) {
    return (dispatch) => {
      dispatch({ type: REQUEST_SENYU_ANIMATION_BY_ID });
      SenyuAPI.fetchSenyuAnimationById(id).then(
        (animation) => dispatch({ type: RECEIVE_SENYU_ANIMATION_BY_ID, success:true, id, animation }),
        (error) => dispatch({ type: RECEIVE_SENYU_ANIMATION_BY_ID, success:false, id, error })
      );
    };
  },

};

export default AnimationsActionCreators;
