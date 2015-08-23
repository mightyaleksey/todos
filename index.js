'use strict';

require('babel/register');
require('css-modules-require-hook', {root: __dirname});
module.exports = require('./worker');
