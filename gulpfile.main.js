import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from './webpack.config';


gulp.task('webpack', function (callback) {
  webpack(webpackConfig, function (err, stats) {
    console.log(err);
    callback();
  });
});