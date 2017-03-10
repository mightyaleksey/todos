'use strict';

const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: resolve('app/browser'),
  output: {
    filename: 'browser.js',
    path: resolve('static'),
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /fonts/i,
        loader: 'file',
      },
      {
        test: /\.js/i,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style',
          'css?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss'),
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'styles/globals.css',
    }]),
    new ExtractTextPlugin('styles.css'),
    new NpmInstallPlugin({
      cacheMin: 999999,
      save: true,
    }),
  ],

  postcss: [
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],
};
