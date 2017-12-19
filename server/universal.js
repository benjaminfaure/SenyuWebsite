import path from 'path';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router'
import { Route } from 'react-router-dom';
import createServerStore from './store';
import senyuStore from '../src/store/senyuStore';
import App from '../src/components/App.jsx';

// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }) => {
  data = data.replace('<html lang="fr">', `<html ${html}`);
  data = data.replace('</head>', `${head}</head>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  return data;
};

const universalLoader = (req, res) => {
  // Load in our HTML file from our build
  const filePath = path.resolve(__dirname, '../build/index.html');
  const context = {};

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);

      return res.status(404).end();
    }

    // Create a store and sense of history based on the current path
   const { store, history } = createServerStore(req.path);

    // Render App in React
    const routeMarkup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Route component={App} />
        </StaticRouter>
      </Provider>
    );

    // Let Helmet know to insert the right tags
    const helmet = Helmet.renderStatic();

    // Form the final HTML response
    const html = prepHTML(htmlData, {
      html: helmet.htmlAttributes.toString(),
      head:
        helmet.title.toString() +
        helmet.meta.toString() +
        helmet.link.toString(),
      body: routeMarkup
    });
    console.log(helmet.meta.toString())
    // Up, up, and away...
    res.send(html);
  });
};

export default universalLoader;