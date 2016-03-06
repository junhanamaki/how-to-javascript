const path = require('path');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: PRODUCTION
      ? [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
      ]
      : [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules|src/ },
        { test: /\.js$/, loader: 'babel-istanbul', exclude: /node_modules|test/ }
      ]
  },
  devtool: PRODUCTION ? '' : 'inline-source-map'
};