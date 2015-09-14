import express, { static as statix } from 'express';
import { join } from 'path';
import reducer from './reducer';
import { createStore } from 'redux';
import React, { renderToString } from 'react';
import Container from './components/container';

const app = express();
const port = process.env.PORT || 3000;

// setting jade view engine for the page rendering
app.set('views', join(__dirname, './views'));
app.set('view engine', 'jade');

// static middleware
app.use(statix(join(__dirname, 'static')));
// basic route
app.get('/', (req, res) => {
  const store = createStore(reducer);
  const html = renderToString(<Container store={ store } />);
  res.render('index', {innerHtml: html});
});

app.listen(port, () => console.log(`listening ${port}`));
