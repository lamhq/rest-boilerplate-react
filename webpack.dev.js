/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    contentBase: './dist',
    historyApiFallback: true,
    port: 3001,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    // Enables Hot Module Replacement, otherwise known as HMR
    new webpack.HotModuleReplacementPlugin(),
  ],
});
