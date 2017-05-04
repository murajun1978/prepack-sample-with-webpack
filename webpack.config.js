const {resolve} = require('path');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = {
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new PrepackWebpackPlugin(),
  ]
}
