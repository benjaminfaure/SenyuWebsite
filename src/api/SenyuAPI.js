import 'whatwg-fetch';
import 'babel-polyfill';


let SenyuAPI = {

  fetchIntervenants() {
    return fetch('/intervenants.json')
    .then((response) => response.json());
  },

};


export default SenyuAPI;
