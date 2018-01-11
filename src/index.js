import React from 'react';
import { hydrate } from 'react-dom';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import senyuStore from './store/senyuStore';
import './index.css';
import App from './components/App.jsx';

import registerServiceWorker from './registerServiceWorker';


require('dotenv').config();
const rootElement = document.getElementById('root');
render(
  <Provider store={senyuStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, rootElement);
registerServiceWorker();
