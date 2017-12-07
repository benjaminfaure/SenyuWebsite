import React, { Component } from 'react';

import './MainPage.css';
import MainPageGoogleMap from './MainPageGoogleMap.jsx';
import MainPageSlider from './MainPageSlider.jsx';



class MainPage extends Component {

  render() {


    document.title = `Senyu | 3 et 4 Mars 2018`;

    return (
      <section id="main-page">
        <article>
          {/*<MainPageSlider />*/}
        </article>
        <article>
          <div id="twitch-embed"></div>
        </article>
        <article id="main-page-message">
          <img src="/images/logo_mobile.png" alt="logo" />
          <span>Senyu est de retour du 3 au 4 Mars 2018</span>
          <span>Centre des Congrès d'Epinal</span>
          <span>7 Avenue St Dié</span>
          <span>88000 Épinal</span>
        </article>
        <article>
          <MainPageGoogleMap />
        </article>
      </section >
    );
  }
}




export default MainPage;
