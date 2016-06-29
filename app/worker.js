'use strict';

const { join } = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// setting jade view engine for the page rendering
app.set('views', join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(express.static(join(__dirname, 'static')));
// basic route
app.get('/', (req, res) => {
  // const store = createStore(reducer);
  // const html = renderToString(<Container store={ store } />);
  res.render('index', {innerHtml: 'inner'});
});

app.listen(port, () => console.log(`listening ${port}`));
