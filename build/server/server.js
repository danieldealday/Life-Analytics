var express = require('express');
var mongodb = require('mongo');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var app = express();

mongoose.connect('mongodb://localhost/life-analytics');
mongoose.connection.once('open', function () {
  console.log('Connected to life-analytics database');
});

app.use(express.static(path.join(__dirname, './build')));
app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './../index.html'));
});

app.listen(3000);
module.exports = app;
