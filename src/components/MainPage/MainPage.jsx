import React, { Component } from 'react';

import './MainPage.css';
import MainPageMap from './MainPageMap.jsx';



class MainPage extends Component {

  render() {


    return (
      <section id="main-page">
        <article>
        </article>
        <article id="main-page-message">
          <img src="/images/logo_mobile.png" alt="logo" />
          <span>Merci</span>
          <span>Vous avez été nombreux à nous rejoindre pour Senyu 6.</span>
          <span>Votre avis nous intéresse !</span>
          <span><a href="https://tinyurl.com/ybbt5wvx">Cliquez ici pour répondre à notre questionnaire.</a></span>
        </article>
        <article>
          <MainPageMap />
        </article>
      </section >
    );
  }
}




export default MainPage;
