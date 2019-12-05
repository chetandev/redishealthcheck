global.__base = __dirname;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressJwt = require('express-jwt');
var cons = require('consolidate');



var indexRouter = require('./routes/index');
var api = require('./routes/api')


var app = express();

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/health',api)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  console.log("typeof error:",JSON.stringify(typeof err));
  res.status(err.statusCode || err.status || 500);
  res.send(err);
});

module.exports = app;
