import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const API_URL = 'https://api.twitch.tv/kraken/streams/senyutv';
const API_HEADERS = {
  'Content-Type': 'application/vnd.twitchtv.v5+json',
  'Client-ID': process.env.REACT_APP_TWITCH_API_KEY,
}

let SenyuAPI = {

  async fetchIsSenyuChannelLive() {

    try {
      const response = await axios.get(`${API_URL}`, { headers: API_HEADERS });
      if (response.data.stream !== null) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return { message: `Un erreur s'est produire lors de l'appel à l'API twitch : ${err.message}` };
    }
  },

};


export default SenyuAPI;
