const path = require('path');

module.exports = {
  // Inform webpack we are building a bundle for Node JS and not for the browser
  target: 'node',

  // Tell the root file of the server application
  entry: './src/index.js',

  // Tell where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};
