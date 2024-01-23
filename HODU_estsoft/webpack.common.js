const path = require('path');

module.exports = {
  entry: {
    app: './js/load-more.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/load-more.js',
  },
};
