import update from 'immutability-helper';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { filesReader, normalizeFacebooUrl } from '../utils';

const API_URL = 'https://ws.senyu.fr';//'https://ws.senyu.fr/';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

let SenyuAPI = {

  async fetchIntervenants() {
    try {
      return await axios.get(`${API_URL}/invites`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite lors de la réception des invités : ${err.message}` };
    }
  },
  async fetchIntervenantById(id) {

    try {
      return await axios.get(`${API_URL}/invites/${id}`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite lors de la réception d'un invité' : ${err.message}` };
    }
  },

  async fetchFAQ() {
    try {
      return await axios.get(`${API_URL}/faq`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite lors de la réception de la faq' : ${err.message}` };
    }
  },

  async fetchExposants() {
    try {
      return await axios.get(`${API_URL}/exposants`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite lors de la réception des exposants : ${err.message}` };
    }
  },

  async fetchExposantById(id) {
    try {
      return await axios.get(`${API_URL}/exposants/${id}`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite lors de la réception d'un exposant' : ${err.message}` };
    }
  },

  async fetchSenyuAnimations() {
    try {
      return await axios.get(`${API_URL}/animations`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite lors de la réception des animations : ${err.message}` };
    }
  },


  async fetchSenyuAnimationById(id) {
    try {
      return await axios.get(`${API_URL}/animations/${id}`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite lors de la réception d'une animation' : ${err.message}` };
    }
  },

  async submitRegistration(values) {
    try {
      const image = values.etape2.image ? await filesReader(values.etape2.image): null;
      const facebook =  values.etape2.facebook ? normalizeFacebooUrl(values.etape2.facebook) : null;
      const valuesToSubmit = update(values, {
        etape1: {
          typeIntervenant: { $set: values.typeIntervenant },
        },
        etape2: {
          facebook:  { $set: facebook } ,
          image: { $set: image }
        },
      }
      )

      return await axios.put(`${API_URL}/inscriptions`, valuesToSubmit, { headers: API_HEADERS });
    } catch (err) {
      const errorData = err.response ? err.response.data : {}
      return { message: `Un erreur s'est produite lors de l'inscription : ${err.message}`, data: errorData };
    }
  },

  async fetchModelesDeStands(type) {
    try {
      return await axios.get(`${API_URL}/modeles-de-stands?type=${type}`, { headers: API_HEADERS });
    } catch (err) {
      return { message: `Un erreur s'est produite la récupération des modèles : ${err.message}` };
    }
  }

};


export default SenyuAPI;
