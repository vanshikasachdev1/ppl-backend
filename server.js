var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('hello');
  res.send('hello world');
});

app.listen(8081, function () {
  console.log('Server is running at 8081');
});
