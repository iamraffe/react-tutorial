const config = require('./webpack.common.config');

config.output = {
  filename: 'client-bundle.js',
  path: '../app/assets/javascripts/generated'
};

config.module.loaders.push(
  {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']}},
  {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']}}
);

module.exports = config;
