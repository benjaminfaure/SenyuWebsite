import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import { WIDTH_BREAKPOINT } from '../constants';
import {
  getDimensions
} from '../reducers';

import Menu from './Menu/Menu.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

import MainPage from './MainPage/MainPage.jsx';

import Intervenant from './Intervenants/Intervenant.jsx';
import Intervenants from './Intervenants/Intervenants.jsx';

import Animations from './Animations/Animations.jsx';
import Animation from './Animations/Animation.jsx';

import Exposant from './Exposants/Exposant.jsx';
import Exposants from './Exposants/Exposants.jsx';

import FAQ from './FAQ/FAQ.jsx';


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.dimensions.width >= WIDTH_BREAKPOINT )
      {
        this.setState({isMenuOpen: false})
      }
    }


    toggleMenu() {
      this.setState({isMenuOpen: !this.state.isMenuOpen})
    }



    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Header toggleMenu={this.toggleMenu.bind(this)} isMenuOpen={this.state.isMenuOpen}/>
            <Menu/>
            <div className={this.state.isMenuOpen ? "main-content open" : "main-content"}>


                <Switch>
                  <Route exact path="/" component={MainPage}/>
                  {/* Intervenants */}
                  <Route exact path="/intervenants" component={Intervenants}/>
                  <Route path="/intervenants/:intervenantId" component={Intervenant}/>
                  {/* Exposants */}
                  <Route exact path="/exposants" component={Exposants}/>
                  <Route path="/exposants/:exposantId" component={Exposant}/>
                  {/* Animations */}
                  <Route exact path="/animations" component={Animations}/>
                  <Route path="/animations/:animationId" component={Animation}/>
                  {/* FAQ */}
                  <Route exact path="/faq" component={FAQ}/>


                </Switch>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
      );
    }
  }

  App.propTypes = {
    showMainContent: PropTypes.bool,
  };

  const mapStateToProps = (state) => (
    {
      dimensions: getDimensions(state)
    }
  );




  export default connect(mapStateToProps, null)(App);
