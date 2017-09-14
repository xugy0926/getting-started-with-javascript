import express from 'express';
import cors from 'cors';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import courseInfoMiddleware from './middleware/courseInfo';
import index from './routes/index';
import words from './routes/words';
import homework from './routes/homework';
import topics from './routes/topics';
import sayToTeacher from './routes/sayToTeacher';
import studentWorks from './routes/studentWorks';

let app = express();

// set cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', courseInfoMiddleware, index);
app.use('/words', courseInfoMiddleware, words);
app.use('/topics', courseInfoMiddleware, topics);
app.use('/homework', courseInfoMiddleware, homework);
app.use('/sayToTeacher', sayToTeacher);
app.use('/studentWorks', studentWorks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
