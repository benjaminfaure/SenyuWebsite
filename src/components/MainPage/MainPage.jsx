import React, { Component } from 'react';

import './MainPage.css';
import MainPageGoogleMap from './MainPageGoogleMap.jsx';



class MainPage extends Component {

  render() {


    return (
      <section id="main-page">
        <p>
        </p>
        <p id="main-page-message">
          <img src="/images/logo_mobile.png" alt="logo" />
          <span>Senyu est de retour du 3 au 4 Mars 2018</span>
          <span>Centre des Congrès d'Epinal</span>
          <span>7 Avenue St Dié </span>
          <span>88000 Épinal</span>
        </p>
        <p>
          <MainPageGoogleMap />
        </p>
      </section >
    );
  }
}




export default MainPage;
