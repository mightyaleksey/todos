import express, { static as statix } from 'express';
import { join } from 'path';
import React, { renderToString } from 'react';
import Container from './components/container';

const app = express();
const port = process.env.PORT || 3000;

app.set('views', join(__dirname, './views'));
app.set('view engine', 'jade');

app.use(statix(join(__dirname, 'static')));
app.get('/', (req, res) => res.render('index', {html: renderToString(<Container />)}));

app.listen(port, () => console.log(`listening ${port}`));
