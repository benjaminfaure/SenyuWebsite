import axios from 'axios';
import 'babel-polyfill';

const API_URL = 'https://ws.senyu.fr/';
const API_HEADERS = {
  'Content-Type': 'application/json;charset=UTF-8',
}

let SenyuAPI = {

  async fetchIntervenants() {
    try {
      const response = await axios.get(`${API_URL}/invites`, { headers: API_HEADERS });
      return response.data;
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception des invités : ${err.message}`)
    }
  },
  async fetchIntervenantById(id) {

    try {
      const response = await axios.get(`${API_URL}/invites/${id}`, { headers: API_HEADERS });
      return response.data;
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception d'un invité' : ${err.message}`)
    }
  },

  async fetchFAQ() {
    try {
      const response = await axios.get(`${API_URL}/faq`, { headers: API_HEADERS });
      return response.data;
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception de la faq' : ${err.message}`)
    }
  },

  async fetchExposants() {
    try {
      const response = await axios.get(`${API_URL}/exposants`, { headers: API_HEADERS });
      return response.data;
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception des exposants : ${err.message}`)
    }
  },

  async fetchExposantsByType(type) {
    try {
      const response = await axios.get(`${API_URL}/exposants`, { headers: API_HEADERS });
      return response.data.filter(exposant => exposant.type === type);
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception des exposants : ${err.message}`)
    }
  },

  async fetchExposantById(id) {
    try {
      const response = await axios.get(`${API_URL}/exposants/${id}`, { headers: API_HEADERS });
      return response.data;
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception d'un exposant' : ${err.message}`)
    }
  },

  async fetchSenyuAnimations() {
    try {
      const response = await axios.get(`${API_URL}/animations`, { headers: API_HEADERS });
      return response.data;
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception des animations : ${err.message}`)
    }
  },

  async fetchSenyuAnimationsByType(type) {
    try {
      const response = await axios.get(`${API_URL}/animations`, { headers: API_HEADERS });
      return response.data.filter(animation => animation.type === type);
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception des animations : ${err.message}`)
    }
  },

  async fetchSenyuAnimationById(id) {
    try {
      const response = await axios.get(`${API_URL}/animations/${id}`, { headers: API_HEADERS });
      return response.data;
    } catch (err) {
      console.error(`Un erreur s'est produire lors de la réception d'une animation' : ${err.message}`)
    }
  },

};


export default SenyuAPI;
