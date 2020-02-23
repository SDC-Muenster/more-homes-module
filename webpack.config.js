const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('public'),
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
