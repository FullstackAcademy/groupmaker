'use strict';

const chalk       = require('chalk');
const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const pkg         = require('../package.json');
const routes      = require('./routes');
const { resolve } = require('path');

const app = express();
const env = process.env.NODE_ENV;

app.use(logger(env === 'production' ? 'tiny' : 'dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(routes);
app.use('/*', express.static(resolve(__dirname, '..', 'dist/index.html')));

module.exports = app;
