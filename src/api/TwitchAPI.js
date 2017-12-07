import axios from 'axios';
import 'babel-polyfill';

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
      console.error(`Un erreur s'est produire lors de la réception des invités : ${err.message}`)
    }
  },

};


export default SenyuAPI;