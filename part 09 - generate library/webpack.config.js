const resolve = require('path').resolve;

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'Popup'
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
