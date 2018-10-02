// Ignore those pesky styles
require('ignore-styles');
require('dotenv').config();

// Set up babel to do its thing... env for the latest toys, react-app for CRA
require("@babel/register")({
  ignore: [
    /\/(build|node_modules)\//
  ],
  presets: ['env', 'react-app']
});
// Now that the nonsense is over... load up the server entry point
require('./server');
