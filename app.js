const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

var indexRouter = require('./routes/index');
var linesRouter = require('./routes/line');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);  //http://localhost:4000/
app.use('/line', linesRouter);  //http://localhost:4000/line

module.exports = app;
