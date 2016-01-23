const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: path.resolve(__dirname, 'dist/bundle.js')
  }
};