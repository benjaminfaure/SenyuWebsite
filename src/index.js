import React from 'react';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support

import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import senyuStore from './store/senyuStore';
import './index.css';
import routes from './routes';

import { unregister } from './registerServiceWorker';

import './i18n';

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
