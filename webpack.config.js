var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(__dirname, './static');

module.exports = {
  entry : {
    'index': path.resolve(ROOT_PATH, './src/index.js'),
    'about': path.resolve(ROOT_PATH, './src/about.js')
  },
  output : {
    path : BUILD_PATH,
    filename : '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }]
  },
  devtool: 'source-map',
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
  ]
};