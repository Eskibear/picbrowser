var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var utils = require('./server/utils');
/*
 * config.js
 * module.exports = {
 *   storageBasePath: <local storage path>
 * }
 */
var config = require('./config.js');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//router
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/retrieve', (req, res) => {
  // console.log(req);
  const state = utils.listFiles(req.query.filename);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(state));
  });


// app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));
app.use('/storage', express.static(path.join(config.storageBasePath, '.')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(JSON.stringify(err.stack));
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
