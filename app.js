var compression = require('compression');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var utils = require('./server/utils');
var config = require('./config.js');

var app = express();
app.use(compression());
// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//limit ips
app.use(function(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  console.log(ip);
  if (config.allowedIps.indexOf(ip) < 0) {
    res.statusCode = 401;
    res.end('Unauthorized');
  } else {
    next();
  }
});

//router
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});


app.get('/retrieve', (req, res) => {
  const state = utils.listFiles(req.query.basemap, req.query.filename);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(state));
  });



app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

//auto map dist entry using config.js
config.availableMaps.forEach(function(entry){
  app.use(entry.virtualBase, express.static(path.join(entry.realBase, '.')));
});



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
  res.send(JSON.stringify({
    message: err.message,
    error: err.stack
  }));
});

module.exports = app;
