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

};


export default SenyuAPI;
