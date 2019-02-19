const path = require('path');
const merge = require('webpack-merge');
const excludeNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config = {
  target: 'node',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [excludeNodeExternals()],
};

module.exports = merge(baseConfig, config);
