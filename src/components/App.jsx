import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';


import { WIDTH_BREAKPOINT } from '../constants';
import {
  getShowMainContent,
  getDimensions
} from '../reducers';
import MenuActionCreators from '../actions/MenuActionCreators';

import Menu from './Menu/Menu.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import MainPage from './MainPage/MainPage.jsx';
import Intervenant from './Intervenants/Intervenant.jsx';
import Intervenants from './Intervenants/Intervenants.jsx';


import './App.css';

class App extends Component {



  componentWillReceiveProps(nextProps) {
    if(!nextProps.showMainContent
      && nextProps.dimensions.width >= WIDTH_BREAKPOINT )
      {
        nextProps.resetMenuState();
      }
    }



    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Menu/>
            <div className={this.props.showMainContent ? "main-content" : "main-content open"}>
              <div id="left-content">


                <Route exact path="/" component={MainPage}/>


                <Route path="/intervenant/:intervenantId" component={Intervenant}/>
                <Route path="/intervenants" component={Intervenants}/>

                <Route path='/facebook' component={() => window.location = 'https://www.facebook.com/senyuofficiel/'}/>
                <Route path='/twitch' component={() => window.location = 'https://www.twitch.tv/senyutv'}/>
                <Route path='/twitter' component={() => window.location = 'https://twitter.com/senyuofficiel'}/>
                <Route path='/youtube' component={() => window.location = 'https://www.youtube.com/channel/UCcQ99DuVbT5M9IC3BC1bd8g'}/>

              </div>
            </div>
            <Footer className={this.props.showMainContent ? "main-content" : "main-content open"}/>
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
      showMainContent: getShowMainContent(state),
      dimensions: getDimensions(state)
    }
  );

  const mapDispatchToProps = (dispatch) => (
    {
      resetMenuState: () => dispatch(MenuActionCreators.resetMenuState()),
    }
  );



  export default connect(mapStateToProps, mapDispatchToProps)(App);
