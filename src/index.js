import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import senyuStore from './store/senyuStore';
import './index.css';
import App from './components/App.jsx';

import registerServiceWorker from './registerServiceWorker';


require('dotenv').config();
const rootElement = document.getElementById('root');
hydrate(
  <Provider store={senyuStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, rootElement);
registerServiceWorker();
