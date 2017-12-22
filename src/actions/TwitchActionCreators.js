import {
  REQUEST_IS_CHANNEL_LIVE,
  RECEIVE_IS_CHANNEL_LIVE
} from '../constants';
import TwitchAPI from '../api/TwitchAPI';

let TwitchActionCreators = {

  fetchIsSenyuChannelLive() {
    return (dispatch) => {
      dispatch({ type: REQUEST_IS_CHANNEL_LIVE });
      TwitchAPI.fetchIsSenyuChannelLive().then((response) => {
        if(response.message) {
          dispatch({ type: RECEIVE_IS_CHANNEL_LIVE, success: false, error: response.message })
        } else {
          const twitch = response;
          dispatch({ type: RECEIVE_IS_CHANNEL_LIVE, success: true, twitch});
        }
      });
    };
  },

};

export default TwitchActionCreators;


