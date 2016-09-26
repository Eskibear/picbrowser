var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry : {
    'index': path.resolve(ROOT_PATH, './src/index-entry.js'),
    'about': path.resolve(ROOT_PATH, './src/about-entry.js')
  },
  output : {
    path : BUILD_PATH,
    filename : '[name].packed.js'
  },
  module: {
    loaders: [
      {
        test: /\.(html|ico)$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devtool: 'source-map',
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
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
    new webpack.optimize.DedupePlugin(),
  ]
};