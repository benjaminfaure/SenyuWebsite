import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import browserHistory  from 'history/createBrowserHistory';

import Menu from './Menu/Menu.jsx';
import Header from './Header/Header.jsx';
import MainPage from './MainPage/MainPage.jsx';


import './App.css';

class App extends Component {

  render() {
    return (
      <Router history={browserHistory()}>
        <div className="App">
          <Header/>
          <Menu/>

          <Route path="/" component={MainPage}/>

        </div>
      </Router>
    );
  }
}




export default App;
