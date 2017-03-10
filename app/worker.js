'use strict';

require('babel-register');
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

const { Provider } = require('react-redux');
const { createElement } = require('react');
const { join } = require('path');
const { renderToString } = require('react-dom/server');
const App = require('../component/App/App');
const createAppStore = require('../store');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// setting jade view engine for the page rendering
app.set('views', join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(express.static(join(__dirname, '../static')));
// basic route
app.get('/', (req, res) => {
  const store = createAppStore();
  const html = renderToString(
    createElement(Provider, {store},
      createElement(App))
  );

  res.render('index', {innerHtml: html});
});

app.listen(port, () => console.log(`http://localhost:${port}`));
