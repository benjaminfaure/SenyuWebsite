import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import senyuStore from './store/senyuStore';
import App from './components/App.jsx';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
  <Provider store={senyuStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
