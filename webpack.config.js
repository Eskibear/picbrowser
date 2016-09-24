var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(__dirname, './static');
var JS_PATH = path.resolve(ROOT_PATH, './src/index.js');
module.exports = {
  entry : {
    'bundle': JS_PATH,
  },
  output : {
    path : BUILD_PATH,
    filename : 'bundle.js'
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
  }
  // ,
  // 其他解决方案配置
  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.css', '.json'],
  // },
  // // 插件项
  // plugins : [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false,
  //     },
  //     output: {
  //       comments: false,
  //     },
  //   }),
  // ]
};