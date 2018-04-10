import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import senyuStore from './store/senyuStore';
import './index.css';
import App from './components/App.jsx';
import routes from './routes';

import { unregister } from './registerServiceWorker';


require('dotenv').config();

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
hydrate(
  <Provider store={senyuStore}>
    <BrowserRouter>
        {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>, rootElement);
} else {
  render(
    <Provider store={senyuStore}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>, rootElement);
}
unregister();
