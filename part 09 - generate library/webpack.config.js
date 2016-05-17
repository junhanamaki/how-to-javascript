const webpack = require('webpack');
const resolve = require('path').resolve;

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'dev_bundle') {
  module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'popup.js',
      library: 'Popup'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
      ]
    },
    externals: {
      lodash: 'lodash'
    },
    devtool: 'source-map'
  };
} else if (NODE_ENV === 'prod_bundle') {
  module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'popup.min.js',
      library: 'Popup'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
      ]
    },
    externals: {
      lodash: 'lodash'
    },
    plugins: [new webpack.optimize.UglifyJsPlugin()]
  };
} else {
  module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'popup.js',
      library: 'Popup'
    },
    module: {
      preLoaders: [
        { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
      ],
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /node_modules|src/ },
        { test: /\.js$/, loader: 'babel-istanbul', exclude: /node_modules|test/ }
      ]
    },
    devtool: 'inline-source-map'
  };
}
