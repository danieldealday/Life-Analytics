var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './../client/')));
// app.use(bodyParser());

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, './../client/index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
