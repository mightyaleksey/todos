'use strict';

const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: resolve('app/browser'),
  output: {
    filename: 'browser.js',
    path: resolve('static'),
  },

  module: {
    loaders: [
      {
        test: /\.js/i,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style',
          'css?modules&localIdentName=[name]--[local]&importLoaders=1!postcss'),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new NpmInstallPlugin({
      cacheMin: 999999,
      save: true,
      // saveDev: true,
    }),
  ],

  postcss: [
    require('postcss-url')({url: 'inline'}),
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],
};
