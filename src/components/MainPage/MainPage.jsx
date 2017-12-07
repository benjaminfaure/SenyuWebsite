import React, { Component } from 'react';

import './MainPage.css';
import MainPageGoogleMap from './MainPageGoogleMap.jsx';
import MainPageSlider from './MainPageSlider.jsx';



class MainPage extends Component {

  render() {


    return (
      <section id="main-page">
        <p>
          {/*<MainPageSlider />*/}
        </p>
        <p id="main-page-message">
          <img src="/images/logo_mobile.png" alt="logo" />
          <div itemScope itemType="http://schema.org/Event">
            <div id="senyu-event-info">
              <span itemProp="name">Senyu</span> est de retour du <time itemProp="startDate" dateTime="2018-03-03"> 3</time> au <time itemProp="endDate" dateTime="2018-03-04"> 4</time> Mars 2018
            </div>
            <span id="senyu-event-adress" itemProp="location" itemType="http://schema.org/PostalAddress">
              <span itemProp="name" >Centre des Congrès d'Epinal</span>
              <span itemProp="streetAdress"> 7 Avenue St Dié</span>
              <span itemProp="postalCode">88000</span> <span itemProp="addressLocality">Épinal</span>
            </span>
          </div>
        </p>
        <p>
          <MainPageGoogleMap />
        </p>
      </section >
    );
  }
}




export default MainPage;
