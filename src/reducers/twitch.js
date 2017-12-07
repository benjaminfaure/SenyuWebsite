import {
  RECEIVE_IS_CHANNEL_LIVE
} from '../constants';
import 'babel-polyfill';

const initialState = [{
  isLive: false
}]

const twitch = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_IS_CHANNEL_LIVE:
      return action.twitch;

    default:
      return state;
  }
}

export default twitch;

