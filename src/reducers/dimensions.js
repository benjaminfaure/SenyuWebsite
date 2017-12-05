import {
  UPDATE_DIMENSIONS,
} from '../constants';
import update from 'react-addons-update';
import 'babel-polyfill';

const defaultDimensions = () => {
  var dims = getCurrentDimensions();
  return { width: dims.width, height: dims.height }
};


const getCurrentDimensions = () => {
  var w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    s_width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
    s_height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
  return { width: s_width, height: s_height };
}

const dimensions = (state = defaultDimensions(), action) => {
  switch (action.type) {
    /*
    * Update Screen dimensions
    */
    case UPDATE_DIMENSIONS:
      var dims = getCurrentDimensions();
      return update(state, {
        width: { $set: dims.width },
        height: { $set: dims.height }
      });

    default:
      return state;
  }
};



export default dimensions;

export const getDimensions = (state) => state;
