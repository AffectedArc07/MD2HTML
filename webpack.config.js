const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'md2html.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'md2html',
  },
  mode: 'production',
};