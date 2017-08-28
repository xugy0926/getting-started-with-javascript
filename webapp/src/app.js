import express from 'express';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import _ from 'lodash';

import index from './routes/index';
import words from './routes/words';
import homework from './routes/homework';
import api from './routes/api';

let app = express();

// set cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

_.extend(app.locals, {
  title: 'JavaScript编程入门',
  teacher: '徐高阳',
  teacherAvatar:
    'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
  startTime: '2017/08/08',
  endTime: '2017/09/10'
});

app.use('/', index);
app.use('/words', words);
app.use('/homework', homework);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
