import {
  UPDATE_DIMENSIONS,
} from '../constants';
import { throttle } from '../utils';


let DimensionsActionCreators = {


  _updateDimensions: throttle((dispatch) => {
    dispatch({ type: UPDATE_DIMENSIONS });
  }, 200),

  updateDimensions() {
    return (dispatch) => this._updateDimensions(dispatch);
  },


};

export default DimensionsActionCreators;
