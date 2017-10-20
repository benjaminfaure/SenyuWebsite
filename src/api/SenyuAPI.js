import 'whatwg-fetch';
import 'babel-polyfill';


let SenyuAPI = {

  fetchIntervenants() {

    return fetch('/intervenants.json')
    .then((response) => response.json());
  },
  fetchIntervenantById(id) {
    return fetch('/intervenants.json')
    .then((response) => response.json())
    .then((response) => response[id - 1]);
  },

  fetchFAQ() {
    return fetch('/faq.json')
    .then((response) => response.json());
  },


  fetchExposants() {
    return fetch('/exposants.json')
    .then((response) => response.json());
  },
  fetchExposantsByType(type) {
    return fetch('/exposants.json')
    .then((response) => response.json())
    .then((response) => response.filter(exposant => exposant.type === type));
  },
  fetchExposantById(id) {
    return fetch('/exposants.json')
    .then((response) => response.json())
    .then((response) => response[id - 1]);
  },


  fetchSenyuAnimations() {

    return fetch('/animationsSenyu.json')
    .then((response) => response.json());
  },
  fetchSenyuAnimationById(id) {
    return fetch('/animationsSenyu.json')
    .then((response) => response.json())
    .then((response) => response[id - 1]);
  },

};


export default SenyuAPI;
