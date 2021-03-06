/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const outputDir = path.resolve(__dirname, 'dist');
const nodeEnv = process.env.NODE_ENV;
module.exports = {
  entry: {
    app: ['./src/index.jsx'],
  },
  output: {
    path: outputDir,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin([outputDir]),
    // Automatically generate an HTML5 file for you that includes all your webpack bundles
    new HtmlWebpackPlugin({
      title: 'Rest Boilerplate',
      favicon: './public/favicon.ico',
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    }),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
    // Tell webpack what directories should be searched when resolving modules.
    modules: ['node_modules'],
  },
  module: {
    rules: [
      // load image
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
      // load font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      // load css file
      {
        test: /\.css$/,
        loader: [
          // extract CSS into separate files
          nodeEnv === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      // load scss file
      {
        test: /\.(scss|sass)$/,
        loader: [
          nodeEnv === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // load javascript/react components
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // let RHL patch React-DOM to enable hot loading
      {
        test: /\.(js|jsx)$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
    ],
  },
};
